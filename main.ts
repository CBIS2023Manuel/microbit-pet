enum RadioMessage {
    message1 = 49434,
    Hello = 49337,
    Smile = 23553
}
input.onButtonPressed(Button.A, function () {
    Health += 1
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.pause(2000)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    Health += -2
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    Health += -1
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.Smile)
})
input.onButtonPressed(Button.B, function () {
    Health += 1
    basic.showLeds(`
        # # . # #
        # # # # #
        . . # . .
        # # # # #
        # # . # #
        `)
    basic.showIcon(IconNames.Heart)
})
input.onSound(DetectedSound.Quiet, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    Health += 2
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
radio.onReceivedMessage(RadioMessage.Smile, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
})
let Health = 10
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() >= 200) {
        basic.showString("I WANT SHADE")
    }
    if (input.lightLevel() <= 50) {
        basic.showString("I WANT LIGHT")
    }
})
basic.forever(function () {
    if (input.temperature() >= 30) {
        Health += -1
        basic.showString("I'M TOO HOT")
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . # . # .
        # . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(200)
    if (Health == 0) {
        basic.showString("BULLY ")
        basic.showIcon(IconNames.Skull)
        basic.pause(5000)
    }
})
basic.forever(function () {
    Health += -1
    basic.pause(5000)
    if (Health == 1) {
        basic.showString("1")
        basic.showIcon(IconNames.SmallHeart)
    }
    if (Health == 5) {
        basic.showString("5")
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
    if (Health == 10) {
        basic.showString("10")
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
