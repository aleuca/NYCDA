// look for messages in the server and if there are messages it will
// fetch the messages from server and render them in chat.pug



//if there is a button press then post message to the server and render
// them in chat.pug


let myMessage = document.getElementById('msg');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        credentials: 'include',
        body: myMessage.value
    })
    .then(response => {
        console.log(myMessage.value)
    })
})


setInterval(function getMessages(){
    fetch('/messages', {
        method: 'GET'
    })
    .then(response => {
        console.log(response.messages)
    })
}, 10000)
