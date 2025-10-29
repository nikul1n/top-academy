# Задание 1
# Реализуйте класс «Человек». Необходимо хранить в
# полях класса: ФИО, дату рождения, контактный телефон,
# город, страну, домашний адрес. Реализуйте методы класса
# для ввода данных, вывода данных, реализуйте доступ к
# отдельным полям через методы класса.

from datetime import datetime


class Human:
    def __init__(self, fio = "", birthday = "", phone_number = "", city = "", country = "", home_address = ""):
        self.fio = fio
        self.birthday = birthday
        self.phone_number = phone_number
        self.city = city
        self.country = country
        self.home_address = home_address

    def input_data(self):
        self.fio = input("Введите ФИО: ")
        self.birthday = datetime.fromisoformat(input("Введите дату рождения в формате YYYY-MM-DD: "))
        self.phone_number = int(input("Введите номер телефона(только числа):"))
        self.city = input("Введите город: ")
        self.country = input("Введите страну: ")
        self.home_address = input("Введите адрес (улица, номер дома): ")

    def print_data(self):
        print("Данные о Вас:\n" +
        f"ФИО {self.fio}\n" +
        f"Дата рождения: {self.birthday}\n" +
        f"Номер телефона: {self.phone_number}\n" +
        f"Полный адресс: {self.country}, {self.city}, {self.home_address}"
        )
    
human1 = Human()
human1.input_data()
human1.print_data()
