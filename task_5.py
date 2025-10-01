number = int(input("Введите число от 1 до 100: "))

is_fizz = number % 3 == 0
is_buzz = number % 5 == 0

if 1 > number < 100:
    print("Ошибка. Число не попадает в заданный диапазон")
elif is_fizz and is_buzz:
    print("Fizz Buzz")
elif is_fizz:
    print("Fizz")
elif is_buzz:
    print("Buzz")
else:
    print(number)