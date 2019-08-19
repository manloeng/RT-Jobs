from dotenv import load_dotenv
load_dotenv()

from pathlib import Path  # python3 only
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)


import os
SECRET_KEY = os.getenv("FIREBASE_API_KEY")