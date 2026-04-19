import os
import json

from fastapi import Request, APIRouter, Response, HTTPException
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from app.utils.http_client import HttpClient

_http_client = HttpClient()
router = APIRouter()

templates = Jinja2Templates(directory="app/data/templates")

@router.post("/register")
async def register(request: Request):
    body = await request.body()

    headers = dict(request.headers)
    headers.pop("host", None)

    res = await _http_client.post(
        os.getenv("USER_SERVICE_URL") + "/register",
        content=body,
        headers=headers
    )
    if not res:
        raise HTTPException(
            status_code=502,
            detail="User service failed or unreachable"
        )

    if res:
        headers = dict(res["headers"])
        headers.pop("content-length", None)
        headers.pop("content-encoding", None)

    return {
        "message": "Registered successfully!"
    }


@router.post("/login")
async def login(request: Request, response: Response):
    body = await request.body()
    headers = dict(request.headers)
    headers.pop("host", None)

    res = await _http_client.post(
        os.getenv("USER_SERVICE_URL") + "/login",
        content=body,
        headers=headers
    )

    data = json.loads(res["content"])
    access_token = data.pop("access_token", None)
    data.pop("token_type", None)

    headers = dict(res["headers"])
    headers.pop("content-length", None)
    headers.pop("content-encoding", None)
    
    response_obj = Response(
        content=json.dumps(data),
        status_code=res["status_code"],
        headers=headers
    )
    
    if access_token:
        response_obj.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            secure=False,
            samesite="lax",
            max_age=20 * 60
        )
    
    return response_obj


@router.get("/send_verification_email/{id}")
async def send_verification_email(request: Request, id: int):
    id = id | 0
    body = {
        "id": id
    }
    headers = dict(request.headers)
    headers.pop("host", None)

    res = await _http_client.get(
        os.getenv("USER_SERVICE_URL") + f"/send_verification_email/{id}",
        params=body,
        headers=headers
    )

    return {
        "message": "Verification email sent to your email address"
    }
    

@router.get("/verify_email/{access_token}")
async def verify_email(request: Request, access_token: str):
    body = await request.body()
    headers = dict(request.headers)
    headers.pop("host", None)

    await _http_client.get(
        os.getenv("USER_SERVICE_URL") + f"/verify_email/{access_token}",
        params=body,
        headers=headers
    )

    return RedirectResponse(
        url=os.getenv("BASE_URL"),
        status_code=302
    )


@router.get("/me")
async def verify_token(request: Request):
    token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")

    body = {
        "access_token": token,
        "token_type": "bearer"
    }

    res = await _http_client.post(
        os.getenv("USER_SERVICE_URL") + "/account",
        payload=body
    )

    return Response(
        content=res["content"],
        status_code=res["status_code"],
        headers=res["headers"]
    )


@router.post("/forget")
async def forget(request: Request):
    body = await request.body()

    headers = dict(request.headers)
    headers.pop("host", None)

    res = await _http_client.post(
        os.getenv("USER_SERVICE_URL") + "/forget",
        content=body,
        headers=headers
    )
    if not res:
        raise HTTPException(
            status_code=502,
            detail="User service failed or unreachable"
        )

    return {
        "message": "Reset password link sent on your email!"
    }

@router.get("/reset_password/{reset_token}")
async def reset_password(request: Request, reset_token: str):
    return templates.TemplateResponse(
        "reset_password.html", 
        {
             "request": request,
             "token": reset_token
        }
    )


@router.post("/reset")
async def reset(request: Request):
    body = await request.body()

    headers = dict(request.headers)
    headers.pop("host", None)

    res = await _http_client.post(
        os.getenv("USER_SERVICE_URL") + "/reset",
        content=body,
        headers=headers
    )
    if not res:
        raise HTTPException(
            status_code=502,
            detail="User service failed or unreachable"
        )

    return {
        "message": "Password reset successfully."
    }


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("access_token")
    return {"message": "Logged out"}