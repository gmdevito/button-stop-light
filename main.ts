let lightState = 0
input.onPinPressed(TouchPin.P0, function () {
    if (lightState <= 1) {
        lightState += 1
    } else {
        lightState = 0
    }
})
function clearPins () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
basic.forever(function () {
    clearPins()
    if (lightState == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (lightState == 2) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
