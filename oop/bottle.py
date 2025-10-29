#класс - описательные характеристики на основе которых мы работаем 
#настоящий объект полностью покрывает логикой всё что с ним надо делать 
#
#
#
#
#
#






from datetime import datetime

def time_until_expiration(self):
    time_until = self.expiration_date - datetime.now()
    return time_until

class MilkBottle:
    def __init__(self, price, volume, brand, expiration_date): #инициализатор = конструктор, 
        self.price = price
        self.volume = volume
        self.brand = brand
        self.expiration_date = expiration_date

bottle = MilkBottle(
    volume=1.,
    price=100.,
    brand='Vkusnyaevo'
    expiration_date=datetime(2025,11,1)
)