from datetime import datetime

class Human:
    def __init__(self):
        self.name = ''
        self.birtsday = ''
    def input_data(self):
        self.name = input("Введите ФИО: ")
        self.birthday = datetime.fromisoformat(input("Введите дату рождения в формате YYYY-MM-DD: "))
    def print_data(self):
        print("Данные о Вас:\n" +
        f"ФИО {self.name}\n" +
        f"Дата рождения: {self.birthday}\n" +
        f"Полных лет: {(datetime.now().year - self.birthday.year)}\n"
        # f"Номер телефона: {self.phone_number}\n" +
        # f"Полный адресс: {self.country}, {self.city}, {self.home_address}"
        ) 
    
    def __str__(self):
        print(f'{self}')
        

class Builder(Human):
    def __init__(self, name, age, specialisation):
        super().__init__(name, age)
        self.specialisation = specialisation

class Sailor(Human):
    def __init__(self, name, age, count_exit_in_sea):
        super().__init__(name, age)
        self.count_exit_in_sea = count_exit_in_sea

class Pilot(Human):
    def __init__(self, name, age, overload_test_result):
        super().__init__(name, age)
        self.overload_test_result = overload_test_result

human1 = Human()
human1.input_data()
human1.print_data()