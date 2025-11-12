from abc import ABC, abstractmethod

class GameObject(ABC):
    @abstractmethod
    def update(self, game: 'Game') -> None:
        pass

    @abstractmethod
    def draw(self, game):
        pass