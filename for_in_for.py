quantity_row = int(input("Введите количество строк: "))
quantity_col = int(input("Введите количество столбцов: "))

for row in range(quantity_row):
    for col in range(quantity_col):
        print("*", end=" ")
    print()