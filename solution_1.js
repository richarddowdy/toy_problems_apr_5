// Solution 1
const numbers = [14, -8, 7, 3, 1, -4]

const absoluteValueMap = (numbers) => {
    let map = {};
    for(let i = 0; i < numbers.length; i++) {
        map[i] = Math.abs(numbers[i])
    }
    return map;
}


console.log(absoluteValueMap(numbers)) // { '0': 14, '1': 8, '2': 7, '3': 3, '4': 1, '5': 4 }


// Solution 2
const myName = "Richard Dowdy"

const countVowels = (name) => {
    let vowels = "aeiou";
    let count = 0;

    for(let i = 0; i < name.length; i++) {
        if(vowels.includes(name[i])) {
            count ++;
        }
    }

    return count;
}

console.log("Vowels in my name:", countVowels(myName)) // Vowels in my name: 3