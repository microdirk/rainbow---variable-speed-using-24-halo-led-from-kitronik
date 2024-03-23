input.onButtonPressed(Button.A, function () {
    if (Direction2 == 1) {
        Speed = Speed - Delta
        if (Speed < SpeedMin) {
            Direction2 = -1
            Speed = SpeedMin
        }
    } else if (Direction2 == -1) {
        Speed = Speed + Delta
        if (Speed > SpeedMax) {
            Speed = SpeedMax
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Direction2 == -1) {
        Speed = Speed - Delta
        if (Speed < SpeedMin) {
            Direction2 = 1
            Speed = SpeedMin
        }
    } else if (Direction2 == 1) {
        Speed = Speed + Delta
        if (Speed > SpeedMax) {
            Speed = SpeedMax
        }
    }
})
let SpeedMax = 0
let SpeedMin = 0
let Speed = 0
let Direction2 = 0
let Delta = 0
Delta = 25
Direction2 = 1
Speed = 100
SpeedMin = 0
SpeedMax = 400
let Delay = Speed
let DelayMin = SpeedMin
let DelayMax = SpeedMax
let Display = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
Display.showRainbow(1, 360)
basic.forever(function () {
    while (true) {
        if (Direction2 == 1) {
            Display.rotate(1)
            Display.show()
        } else if (Direction2 == -1) {
            Display.rotate(-1)
            Display.show()
        }
        Delay = DelayMax - Speed
        basic.pause(Delay)
    }
})
