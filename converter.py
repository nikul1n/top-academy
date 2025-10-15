import requests
import os
import json
import datetime

path = os.path.dirname(__file__)

# pip instal requests
# rub_rate_info = requests.get('http://')
# rub_rate_info = rub_rate_info.json()['rates']
# with open(path / 'rubles_rates.json', '+w') as file:
#     data = json.load(file)
#     current_date = datetime.now()
#     if datetime.data['last_save_date']

USD = 81.45
EUR = 94.52
CNY = 11.44
Choise = 1

cash = int(input("Введите количество рублей: "))
while Choise != 0:
    print("В какую валюту конвертировать:\n" +
        '1. Доллары\n' +
        '2. Евро\n' +
        '3. Юани'
        )

    Choise = input()

    match Choise:
        case'1':
            print(f"{cash / USD:.2f} долларов")
        case'2':
            print(f"{round(cash / EUR, 2)} евро")
        case'3':
            print(f"{round(cash / CNY, 2)} юаней")

    print("Хотите продолжить?\n" +
        '1. Поменять в другую валюту\n' +
        '2. Изменить количество рублей\n' +
        '0. Выйти'
        )
    Choise = input()

    match Choise:
        case'1':
            continue
        case'2':
            cash = int(input("Введите количество рублей: "))
        case'0':
            break    

print("До свидания!")