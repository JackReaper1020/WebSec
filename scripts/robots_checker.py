from asyncio import exceptions
import sys
import requests

if len(sys.argv) < 3: 
    print("USAGE: python3 html_checker.py [url]")
    sys.exit(1)

def main(): 
    print("HEllo")
    
    ## Add the url for checking
    url = sys.argv[1].strip()

    word = sys.argv[2]
    word = word.lower()

    
    try: 

        response = requests.get(url)
        print(response.text)
        lines = response.text.splitlines()
        for i, line in enumerate(lines): 
            if word in line.lower(): 
                print(word," found at line " ,i+1 )
                print("Printing the next 10 lines: ")
                next_lines = lines[i+1:i+11]
                if next_lines: 
                    for j, next in next_lines: 
                        print("{i+j+1} : {next}")
                else: 
                    print("NOT FOUND")
                print("\n")
            


    except requests.exceptions.RequestException as e:
        print("URL ERROR ", e)


if __name__ == "__main__": 
    main()
