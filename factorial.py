number = int(input("Введите число: "))
factorial = 1

for n in range(1, number+1):
    factorial *= n

print(f"Факториал числа {number} равен {factorial}")