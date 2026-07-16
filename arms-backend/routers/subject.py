from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import models
import schemas

from database import get_db

router = APIRouter(
    prefix="/subjects",
    tags=["Subjects"]
)


@router.post("/", response_model=schemas.SubjectResponse)
def add_subject(subject: schemas.SubjectCreate, db: Session = Depends(get_db)):

    new_subject = models.Subject(
        code=subject.code,
        name=subject.name,
        semester=subject.semester,
        department=subject.department
    )

    db.add(new_subject)
    db.commit()
    db.refresh(new_subject)

    return new_subject


@router.get("/", response_model=list[schemas.SubjectResponse])
def get_subjects(db: Session = Depends(get_db)):

    return db.query(models.Subject).all()