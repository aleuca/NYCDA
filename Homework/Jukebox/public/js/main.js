var audio = new Audio('../public/assets/mozart.mp3')
var button = document.getElementById('button')



function click() {
    let clicked = false
    button.addEventListener("click", function() {
        if(!clicked) {
            console.log("event")
            audio.play()
            clicked = true
            return true
        } else {
            console.log("event stopped")
            audio.pause()
            clicked = false
            return false
        }
    })
}



click()