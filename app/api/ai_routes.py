import os
from pydantic import BaseModel, Field, field_validator
from typing import List, Optional, Tuple

from fastapi import Request, APIRouter

from app.utils.http_client import HttpClient
from app.utils.helper import Helper

_http_client = HttpClient()
router = APIRouter()


class QueryRequest(BaseModel):
    query: str = Field(..., min_length=2, max_length=500)
    messages: List[dict] = Field(default_factory=list)
    file_path: Optional[str] = None
    coord: Optional[Tuple[float, float]] = None

    @field_validator("query", mode="before")  # 'before' runs before min_length check
    @classmethod
    def strip_and_validate_query(cls, value: str) -> str:
        if not isinstance(value, str):
            raise ValueError("Query must be a string")
        stripped = value.strip()
        if len(stripped) < 2:
            raise ValueError("Query must be at least 2 characters after trimming spaces")
        return stripped


@router.post("/ai-query")
async def handle_query(request: Request, queryrequest: QueryRequest):
    body = await request.body()
    body = {
        "query": queryrequest.query,
        "messages": queryrequest.messages,
        "file_path": queryrequest.file_path,
        "coord": queryrequest.coord
    }
    
    headers = dict(request.headers)
    headers.pop("host", None)
    headers.pop("content-length", None)
    headers.pop("content-encoding", None)

    res = await _http_client.post(
        os.getenv("AI_SERVICE_URL") + "/",
        payload={
            "query": queryrequest.query,
            "messages": queryrequest.messages,
            "file_path": queryrequest.file_path,
            "coord": queryrequest.coord
        },
        headers=headers,
        timeout=60
    )

    return res