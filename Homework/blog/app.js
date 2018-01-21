// 3) blog/news, multiple posts
// a) frontpage shows full content for each post
// b) frontpage lists all posts, but only the beginning, i.e. first paragraph or first N words
// c) create separate page for viewing the full content of each post


const express = require("express");
const app = express();
const port = 3000;



app.get( "/", function(req, res) {
    res.send("hi");
})

app.get("/expand", function(req, res) {
    res.send("expanded blog");
})


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})