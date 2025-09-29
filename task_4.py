hour_is_now = int(input("Введите текущий час: "))

if hour_is_now >= 0 and hour_is_now < 6:
    print("Good night")
elif hour_is_now >= 6 and hour_is_now < 13:
    print("Good morning")
elif hour_is_now >= 13 and hour_is_now < 17:
    print("Good afternoon")
elif hour_is_now >= 17 and hour_is_now < 24:
    print("Good evening")
else:
    print("Неверное число")