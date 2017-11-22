// function Person(name, age, interest, female) {
//     this.name = name,
//     this.age = age,
//     this.interest = interest,
//     this.female = female,
//     this.hello = function() {
//         return "what's up " + this.name
//     }
// }


// Person.prototype.catchphrase = function() {
//     return "cool person"
// }

// var new_person = new Person("Dan", 24, "reading", false)
// var new_person2 = new Person("Al", 23, "surfing", true)

// console.log(new_person2.catchphrase())


function Food(name, color, family ) {
    this.name = name,
    this.color = color,
    this.family = family
    this.juice = function() {
        console.log("juicing!")
    }
}




this.sayName = function() {
    console.log(this.name)
}


function Apple(name, hasSkin ) {
    this.name = name,
    this.hasSkin = hasSkin
}

var banana = new Food("banana", "yellow", "fruit")
var apple = new Apple("gala", true)

console.log(apple.hasSkin)