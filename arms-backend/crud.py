from sqlalchemy.orm import Session
import models
import schemas


def create_teacher(db: Session, teacher: schemas.TeacherCreate):
    new_teacher = models.Teacher(
        fullname=teacher.fullname,
        email=teacher.email,
        phone=teacher.phone,
        department=teacher.department
    )

    db.add(new_teacher)
    db.commit()
    db.refresh(new_teacher)

    return new_teacher


def get_teachers(db: Session):
    return db.query(models.Teacher).all()