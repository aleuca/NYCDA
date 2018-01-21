// Age database exercise:
// form for entering your name and age, press button, you're now saved
// form for looking up someone's age, press button, you're told his age or told that there's no such person
// use: an array of objects (name, age)

// Thought exercise: what if you used an object for mapping the names to ages? Advantages, disadvantages? (h: dup)


let people = []

document.getElementById("submit").addEventListener("click", function saveUser() {
    let userName = document.getElementById("first_name").value
    let userAge = document.getElementById("age").value


    people.push({
        name: userName,
        age: userAge
    })

})

document.getElementById("frmSubmit").addEventListener("click", function lookup(event) {
    event.preventDefault()
    let imput = document.getElementById("lookup_age").value
    for (let i = 0; i < people.length; i++) {
        if (imput === people[i].age) {
            console.log(people[i].name)
        }
    }
})
