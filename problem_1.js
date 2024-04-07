// Problem 1
const numbers = [14, -8, 7, 3, 1, -4]

// Returns a map (javascript object) of a given numbers array 
// where the key is the index of the number and the value is
// the absolute value of the number.

// Order of the numbers in the returned map does not matter, only that the key-value pairs are correct
const absoluteValueMap = () => { 
    // Code goes here
}

console.log(absoluteValueMap(numbers)) // { '0': 14, '1': 8, '2': 7, '3': 3, '4': 1, '5': 4 }




// Problem 2
// Returns the number of vowels in a given name
function countVowels(name) {
    console.log("Original Name = ", name)
    let lowerCaseName = name.toLowerCase();
    console.log("LowerCased name = ", lowerCaseName)
    console.log("Name after lowercasing = ", name)
    // Code goes here
    let vowels = "aeiou"
    let count = 0;
    for (let i = 0; i < lowerCaseName.length; i++){
        let currentLetter = lowerCaseName[i]
        console.log("Current letter is ", currentLetter)
        if (vowels.includes(currentLetter)){
            count++;
        }
    }
    return count
}

console.log("Vowels in my name:", countVowels("Richard Dowdy")) // Vowels in my name: 3