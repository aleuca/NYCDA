/**
 * This function modifies text and then passes it to a function that you provide as an argument
 */
function functionWithCallback(text, callback) {
    const newText = `${text}_123`
    return callback(newText)
  }

  functionWithCallback("hello", (text) => {
    console.log("This is the value of `text`:", text)
  })

  /**
   * We get an error if we don't pass a function as the second argument
   */
  try {
    functionWithCallback("hello", "more text")
  } catch (err) {
    console.log("Error message:", err.message)
  }


  /**
   * Here, we'll console.log but not return, to demonstrate that it won't be passed to returnValue
   */
  let returnValue = functionWithCallback("hello", (text) => {
    // doing nothing here
    console.log(text)
  })

  console.log("returnValue is", returnValue, "because we didn't return inside the callback")


  /**
   * now, we'll return for real
   */
  returnValue = functionWithCallback("hello", (text) => {
    // returning to show that the value is passed back now
    return text
  })

  console.log("returnValue is now:", returnValue)

  /**
   * Callback hell is when you need the values from callback functions and have to keep nesting
   */
  functionWithCallback("hello", (text) => {
    console.log("Welcome to callback hell!", text)

    functionWithCallback(text, (newText) => {
      console.log("Welcome to callback hell!", newText)

      functionWithCallback(newText, (newNewText) => {
        console.log("Welcome to callback hell!", newNewText)
      })
    })
  })

  /**
   * Now, let's define a function and THEN pass it as an argument!
   */
  function waitASecond(text) {
    return setTimeout(() => {
      console.log("I waited to say this!", text)
    }, 1000)
  }


  functionWithCallback("hello", waitASecond)