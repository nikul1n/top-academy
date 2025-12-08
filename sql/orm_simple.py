# pip install sqlalchemy
# pip install psycopg2

from typing import List
from typing import Optional
from sqlalchemy.orm import Session
from sqlalchemy import ForeignKey, create_engine, select
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

engine = create_engine("postgresql://postgres:admin@localhost/p51_users_test")

def main():
    Base.metadata.create_all(engine)
    with Session(engine) as session:
        if session.query(User).count() == 0:
            session.add_all(
                [
                User(name="sandy", fullname="Sandy Cheeks"),
                User(name="jim", fullname="Jim Jones"),
                User(name="cathy", fullname="Cathy Carson"),     
                ]
            )
            session.commit()

        for user in session.scalars(select(User)):
            print(user)
                                     

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30))
    fullname: Mapped[Optional[str]]
    addresses: Mapped[List["Address"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"

class Address(Base):
    __tablename__ = "address"
    id: Mapped[int] = mapped_column(primary_key=True)
    email_address: Mapped[str]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"))
    user: Mapped["User"] = relationship(back_populates="addresses")
    def __repr__(self) -> str:
        return f"Address(id={self.id!r}, email_address={self.email_address!r})"
    
if __name__ == "__main__":
    main()
    print("Hello")