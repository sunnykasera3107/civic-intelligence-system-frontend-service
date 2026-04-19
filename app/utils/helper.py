import logging
import os

from fastapi import  HTTPException
import jwt
from jwt.exceptions import InvalidTokenError

logger = logging.getLogger(__name__)


class Helper:
    
    @staticmethod
    def jwt_detokenize(token: str) -> dict:
        try:
            return jwt.decode(token, os.getenv("SECRET_TOKEN"), algorithms=[os.getenv("ALGORITHM")])
        except InvalidTokenError:
            raise HTTPException(status_code=401, detail="Invalid token")