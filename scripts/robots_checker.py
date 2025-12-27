import sys
import requests
import concurrent.futures  

if len(sys.argv) < 2:
    print("Usage: python robots_checker.py <url>")  
    sys.exit(1)

# Clean the input URL: Strip whitespace and remove trailing '/' to avoid double slashes
original_url = sys.argv[1].strip().rstrip('/')
url = f"{original_url}/robots.txt"  # Now builds cleanly

def check_one_path(path):
    """
    New: Separate function to check a single path. This allows parallel execution.
    Handles per-path errors and timeouts to avoid crashes/hangs.
    """
    # Skip invalid paths like '*' 
    if '*' in path or not path.startswith('/'):
        return f"{original_url}{path} : SKIPPED (invalid path)"

    hidden = f"{original_url}{path}"
    try:
        response = requests.get(hidden, timeout=5)  # Timeout to prevent hanging (5 seconds total)
        if response.status_code == 200:
            return f"{hidden} : CODE 200"
        elif response.status_code == 404:
            return f"{hidden} : CODE 404 NO PAGE FOUND"
        else:
            return f"{hidden} : {response.status_code}"
    except requests.exceptions.RequestException as e:  # Catch network errors
        return f"{hidden} : ERROR {e}"
    except Exception as e:  # Fallback for unexpected issues
        return f"{hidden} : UNEXPECTED ERROR {e}"

def check_paths(paths):
    paths = sorted(set(paths))  
    if not paths:
        print("No paths to check.")
        return

    print(f"Checking {len(paths)} paths in parallel...")

    # USe THREADING
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        # Submit all paths to the pool
        future_to_path = {executor.submit(check_one_path, path): path for path in paths}
        
        # As each finishes, print the result
        for future in concurrent.futures.as_completed(future_to_path):
            print(future.result())

def strip_links(response):
    paths = []
    lines = response.text.splitlines()
    for line in lines:
        stripped = line.strip()  
        if stripped.startswith("Allow") or stripped.startswith("Disallow"):  
            scraps = stripped.split(':', 1)
            if len(scraps) > 1:
                path = scraps[1].strip()
                if path:
                    paths.append(path)
    
    check_paths(paths)  # Call the updated check function

def main():
    try:
        response = requests.get(url)  
        if response.status_code == 200:
            print("robots.txt showed status 200: Continuing")
            strip_links(response)
        else:
            print(f"Error: robots.txt returned status {response.status_code}")
    except requests.exceptions.RequestException as e:
        print("URL ERROR", e)
    except KeyboardInterrupt:  # Catch Ctrl+C for clean exit
        print("\nInterrupted by user. Exiting cleanly.")
        sys.exit(0)

if __name__ == "__main__":
    main()
