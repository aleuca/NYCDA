var audio = new Audio('../public/assets/mozart.mp3')
var playButton = document.getElementById('playButton')
var stopButton = document.getElementById('stopButton')


let playing = false
function playSong(play, notPlaying) {
    play.addEventListener("click", function() {
        if(!playing) {
            audio.play()
            play.value = "pause"
            playing = true
            console.log(playing, "event")

            return true
        } else {
            audio.pause()
            play.value = "play"
            playing = false
            console.log(playing, "event paused")

            return false
        }
    })
    notPlaying.addEventListener("click", function() {
        if(playing) {
            play.value = "play"
            audio.pause()
            audio.currentTime = 0
            playing = false
            console.log(playing, "event stopped")

            return true
        }
    })
}

playSong(playButton, stopButton)

// function addSong(addSong) {
//     addSong.addEventListener("click", function() {

// })
// }