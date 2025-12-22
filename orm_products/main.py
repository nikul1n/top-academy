from sqlalchemy import create_engine, insert, select

from sqlalchemy.orm import sessionmaker

from models import Category, Product

engine = create_engine('postgresql://postgres:admin@localhost/p51_products_test')

create_session = sessionmaker(bind=engine) 

with create_session() as session:
    c = Category(name='techno')
    session.add(c)
    session.execute(
        insert(Product).values(name='Laptop', category=c, price = 1000, quantity=10)
    )
    p = Product(name='Phone', price=500, category=c, quantity=10)
    session.add(p)
    print(p.id)
    print(session.scalar(select(Product).limit(1)))