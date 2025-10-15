quantity_row = int(input("Введите ширину квадрата: "))
quantity_col = int(input("Введите высоту квадрата: "))

for row in range(quantity_row):
    for col in range(quantity_col):
        if row == 0 or row == quantity_row - 1:
            print("_", end="")
        elif col == 0 or col == quantity_col - 1:
            print("|", end="")
        else:
            print(" ", end="")
    print()