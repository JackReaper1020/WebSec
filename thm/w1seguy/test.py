hex = str(print(input("Enter the hex: ")))
decoded = bytes.fromhex(hex).decode('utf-8')
print(decoded)



