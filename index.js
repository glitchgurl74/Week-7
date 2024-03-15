const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// This will subtract the first item from the last item.
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log("Result:", result);

// This will add a new age to the array.
let newAge = 42;
ages.push(newAge);

// This will subtract the first item from the last item.
lastIndex = ages.length - 1;
result = ages[lastIndex] - ages[0];
console.log("Updated Result:", result);

// This will calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

let average = sum / ages.length;
console.log("Average Age:", average);


const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// This will calculate the average number of letters in the name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length; 
// This will add the length of each name to the total letters.
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

// This will concatenate all names.
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; 

  if (i !== names.length - 1) {
    concatenatedNames += " ";
  }
}
console.log("Concatenated names:", concatenatedNames);


