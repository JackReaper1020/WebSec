def setup(key):
    flag = 'THM{thisisafakeflag}' 
    xored = ""

    for i in range(0,len(flag)):
        xored += chr(ord(flag[i]) ^ ord(key[i%len(key)]))

    hex_encoded = xored.encode().hex()
    return hex_encoded

def start(server):
    res = ''.join(random.choices(string.ascii_letters + string.digits, k=5))
    key = str(res)
    hex_encoded = setup(key)
    print("This XOR encoded text has flag 1: " + hex_encoded + "\n")
    
    print("What is the encryption key? ")
    key_answer = server.recv(4096).decode().strip()

    try:
        if key_answer == key:
            print("Congrats! That is the correct key! Here is flag 2: " + flag + "\n")
        else:
            print('Close but no cigar' + "\n")
    except:
        print( "Something went wrong. Please try again. :)\n")

