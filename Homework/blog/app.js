const express = require('express');
const app = express();
const pug = require('pug');
const port = 3000;
const db = {
    11: {
        id: 11, title: "k", text:"hello this is a lot of text how are you"
    },

    14: {
        id: 14, title:  "cat", text: "cool"
    }
}

app.use(express.static('public'))
app.set('view engine', 'pug');

app.get( "/", function(req, res) {
    res.render('index');
})


app.get("/blogpost", function(req, res) {
    res.render('allposts', {posts: Object.values(db)});
})


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})






// to expand on different page
// const express = require('express');
// const app = express();
// const pug = require('pug');
// const port = 3000;
// const db = {
//     11: {
//         id: 11, title: "k", text:"hello this is a lot of text how are you"
//     },

//     14: {
//         id: 14, title:  "cat", text: "cool"
//     }
// }

// app.set('view engine', 'pug');

// app.get( "/", function(req, res) {
//     res.render('index');
// })


// app.get("/blogpost", function(req, res) {
//     res.render('allposts', {posts: Object.values(db)});
// })

// app.get('/blogpost/:id', function(req, res) {
//     // find correct post by id
//     const post = db[req.params.id];
//     if(!post) {
//         res.redirect('/blogpost');
//         return
//     }
//     res.render('blogpost', post);
// })


// app.listen(port, function() {
//     console.log(`listening on port ${port}`);
// })