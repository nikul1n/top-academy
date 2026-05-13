def calculator():
    try:
        # Ввод данных
        expression = input("Введите выражение (например, 3 + 5): ").strip()
        
        # Разделяем строку на части
        parts = expression.split()
        
        # Проверяем, что ровно 3 части (число, операция, число)
        if len(parts) != 3:
            raise ValueError("Неверный формат строки. Используйте: a + b")
        
        a_str, operator, b_str = parts
        
        # Пробуем преобразовать в целые числа
        try:
            a = int(a_str)
            b = int(b_str)
        except ValueError:
            raise ValueError("Оба операнда должны быть целыми числами")
        
        # Проверяем диапазон чисел (от 1 до 10 включительно)
        if not (1 <= a <= 10):
            raise ValueError(f"Число {a} не входит в диапазон от 1 до 10")
        if not (1 <= b <= 10):
            raise ValueError(f"Число {b} не входит в диапазон от 1 до 10")
        
        # Выполняем операцию
        result = None
        if operator == '+':
            result = a + b
        elif operator == '-':
            result = a - b
        elif operator == '*':
            result = a * b
        elif operator == '/':
            # Целочисленное деление (остаток отбрасывается)
            result = a // b
        else:
            raise ValueError(f"Неподдерживаемая операция: {operator}. Используйте +, -, * или /")
        
        # Выводим результат
        print(f"Результат: {result}")
        
    except Exception as e:
        print(f"Ошибка: {e}")
        raise  # Завершаем работу с исключением

# Запуск калькулятора
if __name__ == "__main__":
    calculator()