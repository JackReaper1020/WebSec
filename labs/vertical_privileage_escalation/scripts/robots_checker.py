# CHECK FOR AVAILABLE LINKS INSIDE robots.txt

import sys
import requests
import concurrent.futures

# Check if there is a link provided while running
if len(sys.argv) < 2:
    print("Execute ./robots_checker.py [url]")
    sys.exit(1)

# original url
original_url = sys.argv[1].strip().rstrip('/')

# URL for checking robots.txt
url = f"{sys.argv[1].strip()}/robots.txt"  

def check_one_path(path): 

    hidden = f"{original_url}{path}"
    
    try: # Trying out all the links in robots.txt for status
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
    # sort path
    paths = sorted(set(paths))
    print(f"Checking {len(paths)} paths...")

    # USing thReADiNG 
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        # Submit all paths to the pool
        future_to_path = {executor.submit(check_one_path, path): path for path in paths}
        
        # As each finishes, print the result
        for future in concurrent.futures.as_completed(future_to_path):
            print(future.result())



# STRIP individual links available in robots.txt
def strip_links(response): 
    # stores all the paths 
    paths = []
    lines = response.text.splitlines()
    for line in lines: 
        stripped = line.strip()
        if stripped.startswith("Allow") or stripped.startswith("Disallow"): 
            # split the line with the links from : 
            scraps = stripped.split(':',1)
            if len(scraps) > 1:
                # STRIP whitespace from the link
                path = scraps[1].strip()
                if path: 
                    # add to paths
                    paths.append(path)
            
    if not paths: 
        print("NO paths found in robots.txt")
        return
    else:
        check_paths(paths)




def main(): 

    # TRY TO GET robots.txt
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print("robots.txt showed status 200: Continuing")
            strip_links(response)
        else: 
            print("error: robots.txt not reachable")
    except requests.exceptions.RequestException as e:
        print("URL ERROR ", e)


if __name__ == "__main__": 
    main()
