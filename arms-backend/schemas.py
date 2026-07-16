from pydantic import BaseModel


# ==========================
# Teacher Schemas
# ==========================

class TeacherCreate(BaseModel):
    fullname: str
    email: str
    phone: str
    department: str


class TeacherResponse(TeacherCreate):
    id: int

    class Config:
        from_attributes = True


# ==========================
# Subject Schemas
# ==========================

class SubjectCreate(BaseModel):
    code: str
    name: str
    semester: str
    department: str


class SubjectResponse(SubjectCreate):
    id: int

    class Config:
        from_attributes = True


# ==========================
# Department Schemas
# ==========================

class DepartmentCreate(BaseModel):
    name: str
    faculty: str


class DepartmentResponse(DepartmentCreate):
    id: int

    class Config:
        from_attributes = True