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
            print(f"{round(cash / USD, 2)} долларов")
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

print("Досвидания!")