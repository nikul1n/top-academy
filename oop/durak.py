class Card:
    CLUBS = 'Clubs'
    DIAMONDS = 'Diamonds'
    HEARTS = 'Hearts'
    SPADES = 'Spades'

# SUIT_NAMES
# атрибуты методы и свойства

def __init__(self, suit,rank:int):
    self._suit = suit #подчеркивание перед атрибутом обозначает приватность атрибута
    self._rank = rank

def is_superior(self, other: 'Card'):
    return (
        self.suit == other.suit and
        self.rank > other.rank
    )

@property
def suit(self):
    return self._suit

@suit.setter
def set_suit(self, suit):
    self._suit = suit

def __str__(self):
    return f"{self.rank} of {self.suit}"

card1 = Card(Card.CLUBS, 10)
print(card1.suit)
