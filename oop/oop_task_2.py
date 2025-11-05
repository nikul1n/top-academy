from datetime import datetime

class City:
    def __init__(self):
        self.city_name = ''
        self.region = ''
        self.country = ''
        self.peoples_city = ''
        self.zip_city = ''
        self.phone_code_city = ''

    def input_data(self):
        self.city_name = input("Введите название города: ")
        self.region = input("Введите регион города:")
        self.country = input("Введите страну: ")
        self.peoples_city = int(input("Введите количесвто проживающих людей: "))
        self.zip_city = int(input("Введите индекс города (6 цифр): "))
        self.phone_code_city = int(input("Введите телефонный код города (цифры): "))
        

    def print_data(self):
        print("Информация о городе:\n" +
              f"Название города: {self.city_name}\n" +
              f"Находится в регионе: {self.region}\n" +
              f"Находится в стране: {self.country}\n" +
              f"Количество проживающих людей: {self.peoples_city}\n" +
              f"Почтовый индекс города: {self.zip_city}\n" +
              f"Телефонный код города: {self.phone_code_city}"
              )

new_city = City()
new_city.input_data()
new_city.print_data()