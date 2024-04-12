/**
 */
input.onButtonPressed(Button.A, function () {
    b0 = 0
    b1 = 0
    b2 = 0
    b3 = 0
    random = randint(0, 15)
    Microbit.showNumber(Oled.oled19, random)
    b0 = 0
    a0 = random / 2
    if (a0 != 0) {
        b1 = a0 % 2
        a1 = a0 / 2
        if (a1 != 0) {
            b2 = a1 % 2
            a2 = a1 / 2
            if (a2 != 0) {
                b3 = a2 % 2
                a3 = a2 / 2
            }
        }
    }
    Microbit.showNumber(Oled.oled50, b0)
    Microbit.showNumber(Oled.oled46, b1)
    Microbit.showNumber(Oled.oled43, b2)
    Microbit.showNumber(Oled.oled40, b3)
})
input.onButtonPressed(Button.B, function () {
    if (b0 == 1) {
        Microbit.ledGBrightness(DigitalPin.P16, true)
    } else {
        Microbit.ledGBrightness(DigitalPin.P16, false)
    }
    if (b1 == 1) {
        Microbit.ledYBrightness(DigitalPin.P12, true)
    } else {
        Microbit.ledYBrightness(DigitalPin.P12, false)
    }
    if (b2 == 1) {
        Microbit.ledRBrightness(DigitalPin.P8, true)
    } else {
        Microbit.ledRBrightness(DigitalPin.P8, false)
    }
    if (b3 == 1) {
        Microbit.ledBBrightness(DigitalPin.P2, true)
    } else {
        Microbit.ledBBrightness(DigitalPin.P2, false)
    }
})
let a3 = 0
let a2 = 0
let a1 = 0
let a0 = 0
let random = 0
let b3 = 0
let b2 = 0
let b1 = 0
let b0 = 0
Microbit.init()
basic.forever(function () {
	
})
