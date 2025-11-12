class Passport:
    def __init__(self, firstname, lastname, patronymic, birthday, gender, place_birth, citizenship):
        self.firstname = firstname
        self.lastname = lastname
        self.patronymic = patronymic
        self.birthday = birthday
        self.gender = gender
        self.place_birth = place_birth
        self.citizenship = citizenship
        # self.date_issue = ''
        # self.who_issue = ''
        # self.department_code = ''
        # self.series = ''
        # self.registration_adress = ''
        # self.number = ''


passport = Passport(firstname='Pavel', lastname='Nikulin', patronymic='Andreevich',
                    birthday='14.01.1992', gender='male', place_birth='NCH', citizenship='RF')


# ниже функциональные методы
# return all([visa.is_valid() for visa is self.visas]) #проверка что все элементы тру
# return any([visa.is_valid() for visa is self.visas]) #проверка что хоть один элемент тру


class ForeignPassport(Passport):

    def __init__(self, passport: Passport, number_foreign_passport, date_issue):

        super().__init__(firstname, lastname, patronymic, birthday, gender, place_birth, citizenship):
        self.firstname = passport.firstname
        self.lastname = passport.lastname
        self.patronymic = passport.patronymic
        self.birthday = passport.birthday
        self.gender = passport.gender
        self.place_birth = passport.place_birth
        self.citizenship = passport.citizenship

    # def input_data(self):
    #     self.gender = input("Введите пол: ")
    #     self.series = input("Введите серия паспорта: ")
    #     self.number = input("Введите номер паспорта: ")
    #     self.place_birth = input("Введите место рождения: ")
    #     self.firstname = input("Введите Имя: ")
    #     self.lastname = input("Введите Фамилия: ")
    #     self.patronymic = input("Введите Отчество: ")
    #     self.birthday = input("Введите Дата рождения: ")
    #     self.date_issue = input("Введите дата выдачи паспорта: ")
    #     self.who_issue = input("Введите кем выдан: ")
    #     self.department_code = input("Введите код подразделения: ")
    #     self.citizenship = input("Введите гражданство: ")
    #     self.registration_adress = input("Введите адрес регистрации: ")

    # def print_data(self):
    #     print(f"Паспортные данные {self.lastname} {self.firstname} {self.patronymic}:\n" +
    #           f"Пол: {self.gender}\n" +
    #           f"Дата рождения: {self.birthday}\n" +
    #           f"Серия и номер паспорта: {self.series} {self.number}\n" +
    #           f"Дата выдачи паспорта: {self.date_issue}\n" +
    #           f"Кем выдан: {self.who_issue}\n" +
    #           f"Код подразделения: {self.department_code}\n" +
    #           f"Гражданство: {self.citizenship}\n" +
    #           f"Адрес регистрации: {self.registration_adress}\n" +
    #           f"Место рождения: {self.place_birth}"
    #           )
