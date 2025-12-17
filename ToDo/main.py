from sqlalchemy import create_engine, insert, select

from sqlalchemy.orm import sessionmaker

from moduls import UserTask, User, Task, Category, Base

engine = create_engine('sqlite:///db.db') #'postgresql://postgres:admin@localhost/p51_todo')
Base.metadata.create_all(engine)

create_session = sessionmaker(bind=engine) 



with create_session() as session:
    c1 = Category(name = "Green")
    c2 = Category(name = "Yellow")
    c3 = Category(name = "Red")
    
    t1 = Task(name = "Wake Up!", category = c1)
    t2 = Task(name = "Eat", category = c3)
    t3 = Task(name = "Sleep", category = c2)

    u1 = User(firstname = "Pavel", lastname = "Nikulin")
    u2 = User(firstname = "Nikolay", lastname = "Kuznecov")
    u3 = User(firstname = "Sergey", lastname = "Ogurcov")
    u4 = User(firstname = "Dmitry", lastname = "Medvedev")
    u5 = User(firstname = "Vladimir", lastname = "Putin")
    u6 = User(firstname = "Oleg", lastname = "")
    session.add() #добавить каждого массивом циклом
    t1.users_association.append(UserTask(user=u1))
    t1.users_association.append(UserTask(user=u2))
    t1.users_association.append(UserTask(user=u3))

    t2.users_association.append(UserTask(user=u2))
    t2.users_association.append(UserTask(user=u3))
    t2.users_association.append(UserTask(user=u4))

    t3.users_association.append(UserTask(user=u4))
    t3.users_association.append(UserTask(user=u5))
    t3.users_association.append(UserTask(user=u6))



    for task in session.scalars(select(Task)):
        print(f"Пользователь {task.id}. {task.users_association} {task.name} - Категория {task.category}")