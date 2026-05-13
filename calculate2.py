#Калькулятор
a = float(input(" введите первое число:"))
b = float(input(" введите второе число:"))

operation = input("что сделать? (+, -): ")
result = 0
if operation == "+":
    result = a + b
elif operation == "-":
    result = a - b
elif operation == "*":
    result = a * b
elif operation == "/":
    result = a / b

print(F"Результат: {result}")