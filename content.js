(function() {

    function createOverlayBody() {
        const overlay = document.createElement("div")
        overlay.setAttribute("id", "u-sure-overlay")
        return overlay
    }

    function createOverlayLeftSide() {
        const overlayLeft = document.createElement("div")
        overlayLeft.setAttribute("id", "u-sure-left")
        const overlayText = document.createTextNode("Hey! This site might be rough right now. Are you sure you want to view it?");
        overlayLeft.appendChild(overlayText)
        return overlayLeft
    }

    function createButton(overlay) {
        const button = document.createElement("button")
        button.setAttribute("id", "u-sure-button")
        const buttonText = document.createTextNode("I'm sure, thank you");
        button.appendChild(buttonText)
        button.onclick = function() {
            document.body.removeChild(overlay)
        }
        return button;
    }

    function createImage() {
        const image = document.createElement("img")
        image.src = chrome.extension.getURL('addie.png')
        image.setAttribute("id", "u-sure-img")
        return image
    }

    function addOverlay() {
        const overlay = createOverlayBody()
        const overlayLeft = createOverlayLeftSide()
        const button = createButton(overlay)

        overlayLeft.appendChild(button)
        overlay.appendChild(overlayLeft)

        const image = createImage()
        overlay.appendChild(image)
        
        document.body.appendChild(overlay)
    }

    document.addEventListener("DOMContentLoaded", () => {
        addOverlay()
    })
}())
