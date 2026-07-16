from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import models
from database import engine

from routers.teacher import router as teacher_router
from routers.subject import router as subject_router
from routers.department import router as department_router

# ==========================
# Create Database Tables
# ==========================
models.Base.metadata.create_all(bind=engine)

# ==========================
# FastAPI App
# ==========================
app = FastAPI(title="ARMS Backend")

# ==========================
# CORS Configuration
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Register Routers
# ==========================
app.include_router(teacher_router)
app.include_router(subject_router)
app.include_router(department_router)

# ==========================
# Home Route
# ==========================
@app.get("/")
def home():
    return {
        "message": "Welcome to ARMS Backend"
    }