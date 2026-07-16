from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import models
import schemas

from database import get_db

router = APIRouter(
    prefix="/departments",
    tags=["Departments"]
)


@router.post("/", response_model=schemas.DepartmentResponse)
def add_department(
    department: schemas.DepartmentCreate,
    db: Session = Depends(get_db)
):

    new_department = models.Department(
        name=department.name,
        faculty=department.faculty
    )

    db.add(new_department)
    db.commit()
    db.refresh(new_department)

    return new_department


@router.get("/", response_model=list[schemas.DepartmentResponse])
def get_departments(
    db: Session = Depends(get_db)
):

    return db.query(models.Department).all()