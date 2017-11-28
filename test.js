$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/search',
    data: {
    q: 'prince',
    type: 'artist'
    },
    success: function (response) {
    console.log(response);
    }
});