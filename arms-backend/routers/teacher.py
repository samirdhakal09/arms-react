from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import crud
import schemas
from database import SessionLocal

router = APIRouter(
    prefix="/teachers",
    tags=["Teachers"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def add_teacher(
    teacher: schemas.TeacherCreate,
    db: Session = Depends(get_db)
):
    return crud.create_teacher(db, teacher)


@router.get("/")
def all_teachers(
    db: Session = Depends(get_db)
):
    return crud.get_teachers(db)