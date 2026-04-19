import shutil
import uuid
import os

from fastapi import Request, APIRouter, UploadFile, File, Form, HTTPException
from fastapi.templating import Jinja2Templates

from app.utils.http_client import HttpClient
from app.utils.helper import Helper

router = APIRouter()
templates = Jinja2Templates(directory="app/data/templates")


@router.get("/")
def home(request: Request):
    return templates.TemplateResponse(
        "index.html", 
        {
             "request": request
        }
    )


@router.post("/upload-file")
async def upload_file(request: Request):
    form = await request.form()

    file = form.get("file")
    complaintId = form.get("complaintId")

    if not file:
        raise HTTPException(status_code=400, detail="File missing")

    if not complaintId:
        raise HTTPException(status_code=400, detail="complaintId missing")

    try:
        complaintId = int(complaintId)
    except:
        raise HTTPException(status_code=400, detail="Invalid complaintId")

    os.makedirs("app/data/static/files", exist_ok=True)

    filename = f"{uuid.uuid4()}_{file.filename}"
    UPLOAD_DIR = "app/data/static/files"
    file_path = f"{UPLOAD_DIR}/{filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    return os.getenv("BASE_URL") +"/static/files/"+ filename