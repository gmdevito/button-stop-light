let lightState = 0
input.onPinPressed(TouchPin.P0, function () {
    if (lightState <= 1) {
        lightState += 1
    }
})
basic.forever(function () {
    if (lightState == 1) {
        pins.digitalWritePin(DigitalPin.P1, lightState)
    } else if (lightState == 2) {
        pins.digitalWritePin(DigitalPin.P2, lightState)
    } else {
        pins.digitalWritePin(DigitalPin.P0, lightState)
    }
})
