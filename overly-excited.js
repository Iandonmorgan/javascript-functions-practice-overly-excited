// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
const addExcitement = (theWordArray, punctuation, num) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";

    /* 
    SOME WORDS ARE MORE EXCITING
        Add logic to addExcitement that places an exclamation point (!)
        after every third word. Read the following English statement
        and write the equivalent in JavaSript code to make it work.
    */

    /* 
    PRACTICE FUNCTION ARGUMENTS
    Add a new argument to the function so that a developer can specify
    which character should be displayed instead of it always being an
    exclamation point.S
    */


    /*
    START Challenge: Multiple Punctuation
    */
    let punc = "";

    for (num; num > 0; num--) {
        punc += punctuation;
    }

    /*
    END Challenge: Multiple Punctuation
    */

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if ((i + 1) % 3 === 0) {
            buildMeUp += theWordArray[i] + (punc) + " ";
        } else {
            buildMeUp += theWordArray[i] + " ";
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
// addExcitement(sentence);

// I want to use a question mark
// addExcitement(sentence, "?")


/*
Challenge: Multiple Punctuation
Add a new argument to the function so that a developer can
specify how many times the special character should be added.
*/

// I want to use a 4 asterisks
addExcitement(sentence, "*", 4);