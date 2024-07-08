const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map(title => {
// Split the title into separate words
let words = title.split(' ');

// Capitalize each word in the title
words = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// Join back the capitalized words into a string
return words.join(' ');
});
}

// function testing
console.log(titleCased());