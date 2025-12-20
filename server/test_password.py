from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Current hash from main.py
current_hash = "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW"

print("Testing password verification:")
print(f"Hash: {current_hash}")
print(f'Password "secret" matches: {pwd_context.verify("secret", current_hash)}')
print(f'Password "admin" matches: {pwd_context.verify("admin", current_hash)}')
print()
print("Generating new hash for 'secret':")
new_hash = pwd_context.hash("secret")
print(f"New hash: {new_hash}")
print(f"Verification: {pwd_context.verify('secret', new_hash)}")
