// Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
// Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.



var x = 8;
var y = 16;

console.log(x + y)

var array = ["hello", "bye", [7,8,4, "hi"]]
console.log(array[0] + " " + array[2][3])

function greaterThan(z) {
  var z = 300;
  if (z < 100) {
    alert("less than 100!")
  } else {
    alert("value is " + z + ", which is more than 100!")
  }
}

greaterThan()

function name(name) {
  var name = "Al"
  console.log(name)
}

name()

function guessX (guess) {
  var guess = 17
  if (guess == 2) {
    alert("you get an ice cream!")
  } else if (guess > 2) {
    alert("too high!")
  } else {
    alert("too low!")
  }
}

guessX()

var word = 3
// var num = word.toString()

function sayHi() {
  var n = 5
  console.log(word + " " + n)
}

sayHi()

var candy = 100
if (candy > 50 && candy < 100) {
  console.log('hi')
} else if (candy > 100 && candy <200) {
  console.log("bye")
} else {
  console.log("k")
}