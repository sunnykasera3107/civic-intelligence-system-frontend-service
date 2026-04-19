import os
import json
import logging

from fastapi import Request, APIRouter

from app.utils.http_client import HttpClient

_logger = logging.Logger(__name__)
_http_client = HttpClient()
router = APIRouter()


@router.post("/complaint-register")
async def complaint_register(request: Request):
    body = await request.body()
   
    headers = dict(request.headers)
    headers.pop("host", None)
    headers.pop("content-length", None)
    headers.pop("content-encoding", None)

    res = await _http_client.post(
        os.getenv("COMPLAINT_SERVICE_URL") + "/register_complaint",
        payload=json.loads(body),
        headers=headers,
        timeout=60
    )
    
    return res 


@router.post("/complaint-update")
async def complaint_update(request: Request):
    body = await request.body()
   
    headers = dict(request.headers)
    headers.pop("host", None)

    res = await _http_client.post(
        os.getenv("COMPLAINT_SERVICE_URL") + "/update_complaint",
        payload=json.loads(body),
        headers=headers,
        timeout=60
    )
    
    return res 


@router.get("/all-complaints")
async def all_complaints(request: Request):

    headers = dict(request.headers)
    headers.pop("host", None)
    
    res = await _http_client.get(
        os.getenv("COMPLAINT_SERVICE_URL") + "/all_complaints",
        headers=headers,
        timeout=60
    )
    
    return res 


@router.post("/add-comment")
async def add_comment(request: Request):
    body = await request.body()

    _logger.info(body)
   
    headers = dict(request.headers)
    headers.pop("host", None)
    headers.pop("content-length", None)
    headers.pop("content-encoding", None)

    res = await _http_client.post(
        os.getenv("COMPLAINT_SERVICE_URL") + "/comment",
        payload=json.loads(body),
        headers=headers,
        timeout=60
    )
    
    return res 


@router.get("/get-comments/{complaint_id}")
async def get_commnets(complaint_id: int, request: Request):
    
    headers = dict(request.headers)
    headers.pop("host", None)
    
    res = await _http_client.get(
        os.getenv("COMPLAINT_SERVICE_URL") + f"/comments/{complaint_id}",
        headers=headers,
        timeout=60
    )
    
    return res 