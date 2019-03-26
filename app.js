const App = {
    breakpoints: {
        mobile: 990
    }
}

window.onresize = function () {
    if (window.innerWidth < App.breakpoints.mobile) {
        Menu.init()
    }   else {
        Menu.reset()
    }
}

if (window.innerWidth < App.breakpoints.mobile) {
    Menu.init()
}   else {
    Menu.reset()
}

animateTextBlink(`Effective Therapy Against Stress.`, `h1.animated`)