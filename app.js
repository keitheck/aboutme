'use strict';

alert('Oftentimes, it is challenging to get to know a person. Given the pace of a course like 201 this challenge can be amplified. Why not get to know Keith a little bit better by playing a fun guessing game.');

var userName = prompt('Keith is not too formal, so he prefers being on a first name basis.  Please type your name:');
console.log('User Name:', userName);

alert('Pleased to meet you ' + userName + '. I hope you are ready to play a little Keith trivia. Click \"OK\" when you are ready to start.');

var question1 = prompt('\"T\/F\": One of Keith\'s favorite fast food items of all time uses horse meat?');
console.log('question1 answer:', question1);
question1 = question1.toLowerCase();
console.log(question1);

if (question1 === 't') {
  alert('Good job ' + userName + ', you are CORRECT! While living in Slovenija, Keith frequented a local chain of burger restaurants called \"Hot Horse\", serving the best ground horse meat for kilometers around.');
}

if (question1 === 'f') {
  alert('No go ' + userName + '. While living in Slovenija, Keith frequented a local chain of burger restaurants called \"Hot Horse\", serving the best ground horse chuck for kilometers around.');
}

var question2 = prompt('T\/F: Keith has 4 children, which is why he sometimes seems a bit tired.');
  question2 = question2.toLowerCase();
  console.log('Question2:',  question2);

if (question2 === 'f') {
  alert('CORRECT! Keith has 3 children, not 4. However, his youngest does often wake him up at night.');
}

if (question2 === 't') {
  alert('Sorry, you answered incorrectly! Keith has 3 children, not 4. However, his youngest does often wake him up at night.');
}

var question3 = prompt('T\/F: Keith prefers real Christmas trees.');
  question3 = question3.toLowerCase();
  console.log('Question3:',  question3);

if (question3 === 't') {
  alert(userName + ' you are CORRECT! Real Christmas trees are better in every way, especially their amazing smell.');
} else {
  alert('Well ' + userName +', you would think that the convenience and cost of a fake tree would win him over.  But no, fake trees just aren\'t all that festive.');
   }

var question4 = prompt('T\/F: Keith likes to drink coffee.');
  question4 = question4.toLowerCase();
  console.log('Question4:',  question4);

if (question4 === 't') {
  alert(userName + ' you are CORRECT! But not just any coffee, Keith built a business sourcing rare and unique coffee from around the world and selling to coffee snobs who drink coffee less for the caffiene and more for the experience.');
  } else {
  alert('Good guess ' + userName +' but the answer is TRUE.  In fact, he is rather discerning. Keith built a business sourcing rare and unique coffees from around the world and selling to coffee snobs who drink coffee less for the caffiene and more for the experience.');
  }

var question5 = prompt('Okay, final question. T\/F: When he was younger, Keith was in a parashooting accident.');
    question5 = question5.toLowerCase();
      console.log('Question5:',  question5);

if (question5 === 'f') {
    alert(userName + ' you are CORRECT! If he was in a parashooting accident he would likely be dead.');
    } else {
    alert('Well ' + userName +', he isn\'t dead, so either he landed on a really large marshmallow or the answer is False.');
    }

alert('Thanks for playing!  The next page has a bit more info about Keith and his pursuit of a new career in programming.');


// var questMod = toLowerCase(question1);
// console.log('question1 lowercase:', questMod);

// var kids = prompt('how many kids does brian have?');
// console.log('number of kids', kids);
//
// var hats = prompt('how many hats does brian have?');
// console.log('number of hats', hats);

//toLowerCase
//toUpperCase
//parseInt

// || is an 'OR' operator
// && is an 'AND' operator

// if (kids === '3' || kids === '4') {
//   alert('u right');
//
// }
//
// if (kids === '3' && hats.toLowercase() === 'none') {
//   alert('u right again.');
//
// }
