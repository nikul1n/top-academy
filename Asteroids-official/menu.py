import pygame
from constants import Color, Display
from typing import TYPE_CHECKING

from game_object import GameObject
from utilites import draw_text

if TYPE_CHECKING:
    from game import Game    


class Menu(GameObject):
    def __init__(self, game: Game):
        self.game = game

    def run(self):
        while True:        
            self.game.gameDisplay.fill(Color.black)
            draw_text(self.game.gameDisplay, "ASTEROIDS", Color.white, 
                      Display.width / 2, Display.height / 2, 100)
            draw_text(self.game.gameDisplay, "Press any key to START", Color.white,
                    Display.width / 2, Display.height / 2 + 100, 50)
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    gameState = "Exit"
                if event.type == pygame.KEYDOWN:
                    gameState = "Playing"
            pygame.display.update()