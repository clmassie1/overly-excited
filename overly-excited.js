let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let output = " ";

let exclamation = "!"

function addExcitement (theWordArray) {
        for (let i = 0; i <theWordArray.length; i++){
            output += " " + theWordArray[i]
             console.log(output);
             if ((i+1) % 3===0) {
                 output += exclamation
                 
                }
            }
        }
addExcitement(sentence);