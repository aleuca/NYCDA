function toggle(blogpost) {
    console.log(`Toggling for ${blogpost.id}`)
    var readMore = document.getElementById(`paragraph.${blogpost.id}`)
    readMore.style.display = readMore.style.display === 'none' ? 'block' : 'none';
}
