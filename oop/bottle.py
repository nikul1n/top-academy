#класс - описательные характеристики на основе которых мы работаем 
#настоящий объект полностью покрывает логикой всё что с ним надо делать 
#полиморфим - многоформие
#лучше использовать композицию чем наследование
#
#
#
#






from datetime import datetime

def time_until_expiration(self):
    time_until = self.expiration_date - datetime.now()
    return time_until

class BottleProduct:
    def __init__(self, id, price, volume, brand, expiration_date): #инициализатор = конструктор, 
        
        self.id = id
        self.price = price
        self.volume = volume
        self.brand = brand
        self.expiration_date = expiration_date

class AlcoholProduct(BottleProduct):
    def __init__(self, volune,price,brand, expiration_date):
        self.bottle = BoottleProduct(

        )
        super().__init__():
            ...


class CashRegister:
    ...


bottle = BottleProduct(
    volume=1.,
    price=100.,
    brand='Vkusnyaevo',
    expiration_date=datetime(2025,11,1)
)