function animateTextBlink(theText, selector, speed = 100) {
    let headlineDOMEl = document.querySelector(selector)

    if (window.innerWidth > 768) {
        let splittedText = theText.split("")
        let cCharacter = 0

        let intervalID = setInterval(() => {
            headlineDOMEl.innerHTML += splittedText[cCharacter++]

            if (cCharacter > splittedText.length - 1) clearInterval(intervalID)
        }, speed);
    } else {
        headlineDOMEl.innerHTML = theText
    }
}