game.setScore(0)
game.setLife(3)
let jogador_x = 2
let jogador_y = 2
let bomba_x = randint(0, 4)
let bomba_y = randint(0, 4)
let cronometro = 0
let velocidade = 450
basic.showString("GO!")
basic.forever(function () {
    basic.clearScreen()
    led.plotBrightness(jogador_x, jogador_y, 255)
    led.plotBrightness(bomba_x, bomba_y, 10)
    if (input.acceleration(Dimension.X) < -40 && jogador_x > 0) {
        jogador_x += -1
    } else if (input.acceleration(Dimension.X) > 40 && jogador_x < 4) {
        jogador_x += 1
    }
    if (input.acceleration(Dimension.Y) < -40 && jogador_y > 0) {
        jogador_y += -1
    } else if (input.acceleration(Dimension.Y) > 40 && jogador_y < 4) {
        jogador_y += 1
    }
    if (bomba_x == jogador_x && bomba_y == jogador_y) {
        game.addScore(1)
        bomba_x = randint(0, 4)
        bomba_y = randint(0, 4)
        cronometro = 0
    }
    if (cronometro == 9) {
        basic.pause(100)
        game.removeLife(1)
        jogador_x = 2
        jogador_y = 2
        bomba_x = randint(0, 4)
        bomba_y = randint(0, 4)
        cronometro = 0
    }
    cronometro += 1
    basic.pause(velocidade)
    if (velocidade > 250) {
        velocidade += -2
    }
})
