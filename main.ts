let A = 0
let aPlusb = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    A = A + 1
    basic.showNumber(A)
})
input.onGesture(Gesture.Shake, function () {
    aPlusb = 0
    A = 0
    b = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    aPlusb = A + b
    basic.showNumber(aPlusb)
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
    basic.showNumber(b)
})
