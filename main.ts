input.onButtonPressed(Button.A, function () {
    basic.showNumber(temperature)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G - F E D ", 120)
    music.playMelody("C - E F - F G - ", 120)
    music.playMelody("F G - C5 C5 B A G ", 120)
    music.playMelody("G F E C5 C5 B A G ", 120)
    music.playMelody("G F E E E E F G ", 120)
    music.playMelody("E D D D D E F - ", 120)
    music.playMelody("- - - - - - - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(humid)
})
let humid = 0
let temperature = 0
basic.showLeds(`
    . # # # .
    # . . . .
    # . # # #
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.showLeds(`
    # # # . .
    . . . . .
    . # # # .
    . . . # .
    # # # . .
    `)
basic.pause(100)
basic.showLeds(`
    # # . . #
    . . . . #
    # # # . #
    . . # . #
    # # . . #
    `)
basic.pause(100)
basic.showLeds(`
    # . . # #
    . . . # .
    # # . # #
    . # . # .
    # . . # #
    `)
basic.pause(100)
basic.showLeds(`
    . . # # #
    . . # . .
    # . # # #
    # . # . .
    . . # # #
    `)
basic.pause(100)
basic.showLeds(`
    . # # # #
    . # . . #
    . # # # #
    . # . . #
    . # # # #
    `)
basic.pause(100)
basic.showLeds(`
    # # # # .
    # . . . #
    # # # # .
    # . . . #
    # # # # .
    `)
basic.pause(100)
basic.showLeds(`
    # # # . .
    . . . # .
    # # # . .
    . . . # .
    # # # . .
    `)
basic.pause(100)
basic.showLeds(`
    # # . . #
    . . # . #
    # # . . #
    . . # . #
    # # . . #
    `)
basic.pause(100)
basic.showLeds(`
    # . . # .
    . # . # #
    # . . # .
    . # . # .
    # . . # .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    # . # # .
    . . # . #
    # . # . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . # . . .
    . # # . #
    . # . # .
    . # . . .
    . # . . .
    `)
basic.pause(100)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    temperature = dht11_dht22.readData(dataType.temperature)
    humid = dht11_dht22.readData(dataType.humidity)
})
