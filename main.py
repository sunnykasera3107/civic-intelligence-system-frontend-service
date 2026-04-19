from contextlib import asynccontextmanager
import logging
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from app.utils.http_client import HttpClient
from app.api import routes, user_routes, ai_routes, complaint_routes
from fastapi.staticfiles import StaticFiles


def setup_logging():
    if os.getenv("DEBUG_ENABLED", "false").lower() == "true":
        logging.basicConfig(
            level=logging.INFO,
            format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
        )
    else:
        logging.basicConfig(
            level=logging.WARNING,
            format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
        )

# Calling this ONCE at startup
setup_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    httpclient = HttpClient()
    app.state.httpclient = httpclient

    try:
        yield

    finally:
        await httpclient.close()

app = FastAPI(timeout=120, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router)
app.include_router(user_routes.router)
app.include_router(ai_routes.router)
app.include_router(complaint_routes.router)

app.mount("/static", StaticFiles(directory="app/data/static"), name="static")

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, timeout_keep_alive=120)