number = int(input("Введите число умножения: "))
columns = int(input("Введите число, до которого выводить умножение: "))

for n in range(1, columns + 1):
    print(f"{number}*{n} = {number*n}")