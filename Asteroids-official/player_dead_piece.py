import random
import math
import pygame
from Asteroids import Game
from constants import Color

# Create class for shattered ship
class PlayerDeadPiece:
    def __init__(self, x, y, lenght, game: Game):
        self.angle = random.randrange(0, 360) * math.pi / 180
        self.dir = random.randrange(0, 360) * math.pi / 180
        self.rtspd = random.uniform(-0.25, 0.25)
        self.x = x
        self.y = y
        self.lenght = lenght
        self.speed = random.randint(2, 8)
        self.game = game

    def updateDeadPlayer(self):
        pygame.draw.line(self.game.gameDisplay, Color.white,
                         (self.x + self.lenght * math.cos(self.angle) / 2,
                          self.y + self.lenght * math.sin(self.angle) / 2),
                         (self.x - self.lenght * math.cos(self.angle) / 2,
                          self.y - self.lenght * math.sin(self.angle) / 2))
        self.angle += self.rtspd
        self.x += self.speed * math.cos(self.dir)
        self.y += self.speed * math.sin(self.dir)