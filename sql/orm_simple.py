# pip install sqlalchemy
# pip install psycopg2
# set client_encoding='win1251';

from typing import List
from typing import Optional
from sqlalchemy.orm import Session
from sqlalchemy import ForeignKey, create_engine, delete, select
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column, sessionmaker, relationship
from sqlalchemy.ext.asyncio import create_async_engine

engine = create_engine("postgresql://postgres:admin@localhost/p51_users_test")

create_session = sessionmaker(bind=engine)

def main():
    with create_session() as session: #создаётся сессия которая идёт как одна 
        # транзакция (набор sql команд которые можно откатить)
        session.execute(delete(User))
        session.commit() #коммит посылает все исполненные команды

class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(primary_key=True) #все базы будут иметь id.
    # Mapped специальный тип который будет маппить тип в квадратных скобках (основа для других таблиц)

class User(Base):
    __tablename__ = "user_account"
    name: Mapped[str] = mapped_column(String(30), unique=True)
    fullname: Mapped[Optional[str]]
    addresses: Mapped[List["Address"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )

class Address(Base):
    __tablename__ = "address"
    id: Mapped[int] = mapped_column(primary_key=True)
    email_address: Mapped[str]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"))
    user: Mapped["User"] = relationship(back_populates="addresses")    

# Остаток цена название ид

    # Base.metadata.create_all(engine)
    # with Session(engine) as session:
    #     if session.query(User).count() == 0:
    #         session.add_all(
    #             [
    #             User(name="sandy", fullname="Sandy Cheeks"),
    #             User(name="jim", fullname="Jim Jones"),
    #             User(name="cathy", fullname="Cathy Carson"),     
    #             ]
    #         )
    #         session.commit()

    #     for user in session.scalars(select(User)):
    #         print(user)
                                     


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