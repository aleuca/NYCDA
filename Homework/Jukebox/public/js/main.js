var audio = new Audio('../public/assets/mozart.mp3')
var playButton = document.getElementById('playButton')
var stopButton = document.getElementById('stopButton')


let clickedPlay = false
function playSong(obj, obj2) {
    obj.addEventListener("click", function() {
        if(!clickedPlay) {
            console.log("event")
            audio.play()
            obj.value = "pause"
            clicked = true
            return true
        } else {
            console.log("event paused")
            audio.pause()
            obj.value = "play"
            clicked = false
            return false
        }
    })
    obj2.addEventListener("click", function() {
        if(!clickedPlay) {
            console.log("event stopped")
            obj.value = "play"
            audio.pause()
            audio.currentTime = 0
            clicked = true
            return true
        }
    })
}



playSong(playButton, stopButton)