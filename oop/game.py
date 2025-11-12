import pygame

def main():
    try:
        pygeme.init()
        game = Game()
        return
        game.run()
    except Exception as e:
        print('Unexpected error', e)
    finally:
        game.exit()