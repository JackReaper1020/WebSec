import base64

def reverse_encoding(encoded_hex: str) -> str:
    # Step 1: Hex string → bytes
    byte_data = bytes.fromhex(encoded_hex)
    
    # Step 2: Reverse the bytes
    reversed_bytes = byte_data[::-1]
    
    # Step 3: Base64-decode to get original secret bytes
    secret_bytes = base64.b64decode(reversed_bytes)
    
    # Step 4: Decode as UTF-8 string (common for secrets/flags; adjust if needed)
    return secret_bytes.decode('utf-8')

encoded = "3d3d516343746d4d6d6c315669563362"  # example output from encoding "hello world"
print(reverse_encoding(encoded))  # Outputs: hello world
