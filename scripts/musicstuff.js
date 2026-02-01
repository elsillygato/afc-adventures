const bgm = new Audio('audio/charselect.mp3')
bgm.volume = 0.25
bgm.loop = true
let muted = true
let playing = false
const playButton = document.createElement("button")
const volumeContainer = document.createElement("div")
const volumeSlider = document.createElement("input")


function createPlayButton() {
    playButton.innerText = "Click to Play"
    playButton.id = 'mute-button'
    playButton.addEventListener("click", function() {
        muted = false
        if (playing === false) {
            bgm.play()
            playing = true
            playButton.innerText = "Playing"
            volumeSlider.value = 25
        }
    })
    document.body.appendChild(playButton)
}

function createVolumeSlider() {
    volumeContainer.id = 'volume-container'
    const volText = document.createElement('p')
    volText.innerHTML = 'Volume:'
    volumeContainer.appendChild(volText)

    volumeSlider.type = "range"
    volumeSlider.name = "volume"
    volumeSlider.id = "volume-slider"
    volumeSlider.min = "0"
    volumeSlider.max = "100"
    volumeSlider.value = 0
    volumeSlider.oninput = function() {
        bgm.volume = this.value/100
    }

    volumeContainer.appendChild(volumeSlider)
    document.body.appendChild(volumeContainer)
}

createPlayButton()
createVolumeSlider()