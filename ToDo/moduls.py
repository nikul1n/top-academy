from typing import List, Optional
from sqlalchemy import ForeignKey, String 
from sqlalchemy.orm import DeclarativeBase, Mapped
from sqlalchemy.orm import mapped_column, relationship
from sqlalchemy.ext.associationproxy import association_proxy, AssociationProxy


class Base(DeclarativeBase):
    id:Mapped[int] = mapped_column(primary_key=True)

class UserTask(Base):
    __tablename__ = "users_tasks"
    name: Mapped[str] = mapped_column(String(255))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user: Mapped["User"] = relationship(back_populates="tasks_association")
    task_id: Mapped[int] = mapped_column(ForeignKey("tasks.id"))
    task: Mapped["Task"] = relationship(back_populates="users_association")

class User(Base):
    __tablename__ = "users"
    firstname: Mapped[str] = mapped_column(String(255), nullable = True)
    lastname: Mapped[str] = mapped_column(String(255), nullable = True)
    # tasks: Mapped[List["Task"]] = relationship(secondary="users_tasks", back_populates="users", viewonly=True)
    tasks_association: Mapped[List["UserTask"]] = relationship(back_populates="user")

class Task(Base):
    __tablename__ = "tasks"
    name: Mapped[str] = mapped_column(String(255))
    # users: AssociationProxy[List["User"]] = association_proxy("users_tasks", "user") #relationship(secondary="users_tasks", back_populates="tasks", viewonly=True)
    category_id: Mapped[int] = mapped_column(ForeignKey("categories.id"))
    category: Mapped["Category"] = relationship(back_populates='tasks')
    users_association: Mapped[List["UserTask"]] = relationship(back_populates="task")

class Category(Base):
    __tablename__ = "categories"
    name: Mapped[str] = mapped_column(String(255))
    tasks: Mapped[List["Task"]] = relationship(back_populates="category")

