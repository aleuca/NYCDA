var playButton = $('#playButton')
var stopButton = $('#stopButton')
var addButton = $('#addSong')
var nextButton = $('#nextSong')
var addRandom = $('#randomSong')
var currentSongIndex = 0


var songBank = [
    {
        name: 'mozart',
        audio: new Audio('../public/assets/mozart.mp3')
    },
    {
        name: 'moonlight',
        audio: new Audio('../public/assets/moonlight.mp3')
    },
    {
        name: 'scott-joplin',
        audio: new Audio('../public/assets/scott-joplin.mp3')
    },
    {
        name: 'isaac-albeniz',
        audio: new Audio('../public/assets/isaac-albeniz.mp3')
    }
]

const jukebox = {
    audio: [],
    playing: false,
    play: function play() {
        jukebox.audio[currentSongIndex].audio.play()
        playButton.value = "pause"
        jukebox.playing = true
    },

    pause: function pause() {
        jukebox.audio[currentSongIndex].audio.pause()
        playButton.value = "play"
        jukebox.playing = false
    },

    stop: function stop() {
        if(jukebox.audio.length) {
            playButton.value = "play"
            jukebox.audio[currentSongIndex].audio.pause()
            jukebox.audio[currentSongIndex].audio.currentTime = 0
            jukebox.playing = false
        }
    }
}


playButton.click(function() {
    if (jukebox.audio.length){
        if(!jukebox.playing) {
            jukebox.play()
        } else {
            jukebox.pause()
        }
    } else {
        $('#newSong').html("No song in queue. Please add a song")
    }
})
stopButton.click(function() {
    jukebox.stop()
})


addButton.click(function() {
    if (jukebox.audio.length < songBank.length) {
        jukebox.audio.push(songBank[jukebox.audio.length])
        $('#newSong').html("")
        var songName = songBank[jukebox.audio.length - 1].name
        $('#playlist').before("<li>" + songName + "<input type=button value='+' id='" + songName +"'/></li>")

        $('#' + songName).click(function(){
            for (var i = 0; i < songBank.length; i++) {
                if (songBank[i].name === songName) {
                    // insert into queue
                    jukebox.audio.push(songBank[i])
                    $('#playlist').before("<li>" + songName + "</li>")
                }
            }

        })
    }
})

nextButton.click(function() {
    jukebox.stop(currentSongIndex)
    if (currentSongIndex < jukebox.audio.length - 1) {
        currentSongIndex += 1
    } else {
        currentSongIndex = 0
    }
    jukebox.play(currentSongIndex)
})

addRandom.click(function(){
    currentSongIndex = Math.floor(Math.random() * songBank.length)
    songName = songBank[currentSongIndex].name
    $('#playlist').before("<li>" + songName + "</li>")
})

