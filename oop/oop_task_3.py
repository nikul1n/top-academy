class Fractions:
    def __init__(self, numerator, denominator):
        self._numerator = numerator
        self._denominator = denominator

    @property
    def numerator(self):
        return self._numerator
    
    @property
    def denominator(self):
        return self._denominator
    
    def multiple(self, other):
        return Fractions(
            self.numerator * other.numerator,
            self.denominator * other.denominator
        )

    def devide(self, other):
        return Fractions(
            self.numerator * other.denominator,
            self.denominator * other.numerator
        )
    
    def add(self, other):
        return Fractions(
            self.numerator * other.denominator + other.numerator * self.denominator,
            self.denominator * other.denominator)
    
    def sub(self, other):
        return Fractions(
            self.numerator * other.denominator - other.numerator * self.denominator,
            self.denominator * other.denominator)
    
    def __str__(self):
        return f"{self.numerator} / {self.denominator}"
    
    @staticmethod
    def find_gcd(a, b):
        if b == 0:
            return a
        else:
            return Fractions.find_gcd(b, a % b)
    
    def reduce(self):
        gcd = Fractions.find_gcd(self.numerator, self.denominator)
        return Fractions(self.numerator // gcd, self.denominator // gcd)
        

a = Fractions(3, 9)
b = Fractions(1, 7)

print(a)
a = a.reduce()
print(a)


# print(a.multiple(b))
# print(a.devide(b))
# print(a.add(b))
# print(a.sub(b))
# print(a.denominator)
# print(a.numerator)