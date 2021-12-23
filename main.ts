input.onPinPressed(TouchPin.P0, function () {
    if (lightState <= 2) {
        lightState += 1
    } else {
        lightState = 1
    }
})
function clearPins () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
let lightState = 0
lightState = 1
basic.forever(function () {
    clearPins()
    if (lightState == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (lightState == 3) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
