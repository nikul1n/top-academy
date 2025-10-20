import math

def sum_digits(a, b):
    return a + b

def power_of_number(a):
    return a ** 2

def area_of_circle(r):
    return math.pi*(r**2) 

def greater_of_numbers(a, b):
    if a > b: return a
    else: return b

def listing_numbers_in_range(a, b):
    print(*range(a,b))
    # for i in range(a, b+1):
    #     print(i)
    # return None
    
def sum_numbers_in_range(a, b):
    return sum(range(a, b))
    # sum_ = 0
    # for i in range(a, b+1):
    #     sum_ += i
    # return sum_

def check_for_positive(a):
    if a >= 0: return True
    else: return False

def check_number_in_range(number, a, b):
    if a>=number<=b: return True
    else: return False

def check_leap_year(year):
    if year%400 == 0 or year%100 != 0 and year%4 == 0 : return True
    else: return False

def absolute(a):
    if check_for_positive(a):
        return a
    return -a

def greater_of_three_numbers(a, b, c):
    if a > b and a > c: return a
    return b if b > c else c


a = int(input("Число a: "))
b = int(input("Число b: "))
c = int(input("Число c: "))

print(f"сумма чисел: {sum_digits(a, b)}")
print(f"а в квадрате: {power_of_number(a)}")
print(f"площадь круга с радиусом b: {area_of_circle(b)}")
print(f"большее число: {greater_of_numbers(a,b)}")
listing_numbers_in_range(a, b)
print(f"сумма чисел в диапазоне: {sum_numbers_in_range(a,b)}")
print(f"результат проверки на положительность: {check_for_positive(a)}")
print(f"результат проверки вхождения в диапазон: {check_number_in_range(a,b,c)}")
print(f"результат проверки високосный год: {check_leap_year(a)}")
print(f"модуль числа а: {absolute(a)}")
print(f"модуль числа b: {abs(b)}")
print(f"большее из трёх: {greater_of_three_numbers(a,b,c)}")




# def test_leap_year():
#     from datetime import datetime
#     birthday = datetime(2000,1,1)
#     if check_leap_year(birthday.year):
#         print("Год рождения високосный")
#     else: print("Год рождения не високосный")

# test_leap_year()

RED = "#ff0000"
GREEN = "#00ff00"
BLUE = "#0000ff"

def chose_color():
    print(
        '1. Red' +
        '2. Green' +
        '3. Blue'
    )

    choise = input()
    import os
    # os.system('color 1F') 
    match choise:
        case '1':
            return RED
        case '2':
            return GREEN
        case '3':
            return BLUE
    return None

def minmax(a,b):
    return a, b if a > b else b, a