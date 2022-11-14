function Pixel_select (Pix_X: number, Pix_Y: number) {
    if (Pix_X == 0 && Pix_Y > 0) {
        Pix1_Y = Pix_Y - 1
        Pix1_X = 4
    } else if (Pix_X > 0) {
        Pix1_X = Pix_X - 1
    } else if (Pix_X == 0 && Pix_Y == 0) {
        Pix1_X = 4
        Pix1_Y = 4
    }
    led.unplot(Pix1_X, Pix1_Y)
    led.plotBrightness(Pix_X, Pix_Y, 125)
    if (input.buttonIsPressed(Button.A)) {
        led.plotBrightness(Pix_X, Pix_Y, 255)
    }
}
input.onButtonPressed(Button.B, function () {
    Pixel_selection += 1
})
let Pix1_X = 0
let Pix1_Y = 0
let Pixel_selection = 0
basic.forever(function () {
    if (Pixel_selection == 0) {
        Pixel_select(0, 0)
    } else if (Pixel_selection == 1) {
        Pixel_select(1, 0)
    } else if (Pixel_selection == 2) {
        Pixel_select(2, 0)
    } else if (Pixel_selection == 3) {
        Pixel_select(3, 0)
    } else if (Pixel_selection == 4) {
        Pixel_select(4, 0)
    } else if (Pixel_selection == 5) {
        Pixel_select(0, 1)
    } else if (Pixel_selection == 6) {
        Pixel_select(1, 1)
    } else if (Pixel_selection == 7) {
        Pixel_select(2, 1)
    } else if (Pixel_selection == 8) {
        Pixel_select(3, 1)
    } else if (Pixel_selection == 9) {
        Pixel_select(4, 1)
    } else if (Pixel_selection == 10) {
        Pixel_select(0, 2)
    } else if (Pixel_selection == 11) {
        Pixel_select(1, 2)
    } else if (Pixel_selection == 12) {
        Pixel_select(2, 2)
    } else if (Pixel_selection == 13) {
        Pixel_select(3, 2)
    } else if (Pixel_selection == 14) {
        Pixel_select(4, 2)
    } else if (Pixel_selection == 15) {
        Pixel_select(0, 3)
    } else if (Pixel_selection == 16) {
        Pixel_select(1, 3)
    } else if (Pixel_selection == 17) {
        Pixel_select(2, 3)
    } else if (Pixel_selection == 18) {
        Pixel_select(3, 3)
    } else if (Pixel_selection == 19) {
        Pixel_select(4, 3)
    } else if (Pixel_selection == 20) {
        Pixel_select(0, 4)
    } else if (Pixel_selection == 21) {
        Pixel_select(1, 4)
    } else if (Pixel_selection == 22) {
        Pixel_select(2, 4)
    } else if (Pixel_selection == 23) {
        Pixel_select(3, 4)
    } else if (Pixel_selection == 24) {
        Pixel_select(4, 4)
    }
})
