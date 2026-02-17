const trackList = [
    {
        name: "Base Version",
        source: "charselect"
    },
    {
        name: "Ninesweeper Version",
        source: "ninesweeper"
    },
    {
        name: "Tensweeper Version",
        source:"tensweeper"
    }
]


const bgm = new Audio('audio/charselect.mp3')
bgm.volume = 0.25
bgm.loop = true
let muted = true
let playing = false
let currentTrackIndex = 0

const playButton = document.createElement("button")
const volumeContainer = document.createElement("div")
const volumeSlider = document.createElement("input")
const trackSelector = document.createElement("div")
const nextButton = document.createElement("button")
const previousButton = document.createElement("button")

function handleTrackChange(step) {
    if (step >= 0) {
        if (currentTrackIndex === trackList.length - 1) {
            currentTrackIndex = 0
        }
        else {
            currentTrackIndex += step
        }
    } else {
        if (currentTrackIndex === 0) {
            currentTrackIndex = trackList.length - 1
        } else {
            currentTrackIndex += step
        }
    }
}

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

function createTrackSelector() {
    trackSelector.id = "track-selector"
    const nowPlaying = document.createElement('p')
    nowPlaying.innerHTML = "Now Playing: ASC 2026 Character Select Screen"
    const trackName = document.createElement('p')
    trackName.innerHTML = trackList[currentTrackIndex].name

    previousButton.innerText = "<"
    previousButton.onclick = () => {
        handleTrackChange(-1)
        trackName.innerHTML = trackList[currentTrackIndex].name
        bgm.src = `audio/${trackList[currentTrackIndex].source}.mp3`
        if (playing) {
            bgm.play()
        }
    }

    nextButton.innerText = ">"
    nextButton.onclick = () => {
        handleTrackChange(1)
        trackName.innerHTML = trackList[currentTrackIndex].name
        bgm.src = `audio/${trackList[currentTrackIndex].source}.mp3`
        if (playing) {
            bgm.play()
        }
    }

    trackSelector.appendChild(nowPlaying)
    trackSelector.appendChild(trackName)
    trackSelector.appendChild(previousButton)
    trackSelector.appendChild(nextButton)
    document.body.appendChild(trackSelector)
}

createPlayButton()
createVolumeSlider()
createTrackSelector()