const Menu = {
    initializeWithParams: function (ulContainerSelector, listItemsSelector) {
        this.listElements = ulContainerSelector;
        this.listContainer = listItemsSelector;
    },
    listElements: "nav ul li",
    listContainer: "nav ul",
    reset: function () {
        document.querySelectorAll(this.listElements).forEach(function (el) {
            el.style.display = "block"
        })
    },
    init: function () {
        let menuOpen = false

        document.querySelectorAll(this.listElements).forEach(function (el) {
            el.style.display = "none"
        })

        document.querySelector(".hamburguer").onclick = function () {
            if (menuOpen) {
                document.querySelector(this.listContainer).className = ``
                document.querySelectorAll(this.listElements).forEach(function (el) {
                    el.style.display = "none"
                })
            } else {
                document.querySelector(this.listContainer).className = `active`
                setTimeout(function () {
                    document.querySelectorAll(this.listElements).forEach(function (el) {
                        el.style.display = "block"
                    })
                }.bind(this), 300)
            }

            menuOpen = !menuOpen
        }.bind(this)
    }
}