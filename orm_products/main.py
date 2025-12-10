from typing import List, Optional
from sqlalchemy import ForeignKey, String 
from sqlalchemy.orm import DeclarativeBase, Mapped
from sqlalchemy.orm import mapped_column, relationship


class Base(DeclarativeBase):
    id:Mapped[int] = mapped_column(primary_key=True)


class Product(Base):
    __tablename__ = "products"
    product_id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(255))
    price: Mapped[float] = mapped_column(nullable=False)
    quanitity: Mapped[int] = mapped_column(nullable=False) #количество
    category_id: Mapped[int] = mapped_column(
        ForeignKey(
            "categories.id",
            ondelete="set null"
        )
    )
    categories: Mapped[Optional["Category"]] = relationship(
        back_populates="products"
        )

# cascade="all, delete-orphan"
# cascade - сделать теже самые 

class Category(Base):
    __tablename__ = "categories"
    category_id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    product_id: Mapped[int] = mapped_column(ForeignKey="products.id")
    products: Mapped[List[Product]] = mapped_column(
        back_populates="categories", 
        cascade="save-update"
    )

# Остаток цена название ид