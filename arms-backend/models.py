from sqlalchemy import Column, Integer, String
from database import Base


# ==========================
# Teacher Model
# ==========================

class Teacher(Base):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True, index=True)
    fullname = Column(String)
    email = Column(String)
    phone = Column(String)
    department = Column(String)


# ==========================
# Subject Model
# ==========================

class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String)
    name = Column(String)
    semester = Column(String)
    department = Column(String)


# ==========================
# Department Model
# ==========================

class Department(Base):
    __tablename__ = "departments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    faculty = Column(String)