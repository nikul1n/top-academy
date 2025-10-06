start_number = int(input("Введите число начала диапазона: "))
end_number = int(input("Ведите число окончание диапазона: "))

while start_number <= end_number:
    if start_number % 7 == 0:
        print(start_number)
    start_number += 1