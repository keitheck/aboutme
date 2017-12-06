'use strict';

var userName = prompt('I am not too formal, so I prefer being on a first name basis.  Please type your name:');
console.log('User Name:', userName);

alert('Pleased to meet you ' + userName + '. Hope you are ready to play a little Keith trivia. Click \"OK\" when you are ready to start.');

var question1 = prompt('\"T\/F\": One of Keith\'s favorite fast food items of all time uses horse meat?');
console.log('question1 answer:', question1);
question1 = question1.toLowerCase();
console.log(question1);

if (question1 === 't') {
  alert('Good job ' + userName + ', you are CORRECT! While living in Slovenija, Keith frequented a local chain of burger restaurants called \"Hot Horse\", serving the best ground horse chuck for kilometers around.');
}

if (question1 === 'f') {
  alert('No go ' + userName + '. While living in Slovenija, Keith frequented a local chain of burger restaurants called \"Hot Horse\", serving the best ground horse chuck for kilometers around.');
}

var question2 = prompt('T\/F: Keith has 4 children, which is why he didn\'t sleep well last night');
  question2 = question2.toLowerCase();
  console.log('Question2:',  question2);

if (question2 === 'f') {
  alert('CORRECT! Keith has 3 children, not 4. However, his youngest does often wake him up at night, which is why he didn\'t sleep well last night.');
}

if (question2 === 't') {
  alert('Sorry, you answered incorrectly! Keith has 3 children, not 4. However, his youngest does often wake him up at night, which is why he didn\'t sleep well last night.');
}

var question3 = prompt('T\/F: Keith prefers real Christmas trees.');
  question3 = question3.toLowerCase();
  console.log('Question3:',  question3);

if (question3 === 't') {
  alert(userName + ' you are CORRECT! Real Christmas trees are way better in every way, especially their amazing smell.');
} else {
  alert('Well ' + userName +', you would think that the convenience and cost of a fake tree would win him over.  But no, fake trees just aren\'t all that festive.');
   }

var question4 = prompt('T\/F: Keith prefers real Christmas trees.');
  question4 = question4.toLowerCase();
  console.log('Question4:',  question4);

if (question4 === 't') {
  alert(userName + ' you are CORRECT! Real Christmas trees are way better in every way, especially their amazing smell.');
  } else {
  alert('Well ' + userName +', you would think that the convenience and cost of a fake tree would win him over.  But no, fake trees just aren\'t all that festive.');
  }

var question5 = prompt('T\/F: Keith prefers real Christmas trees.');
    question5 = question5.toLowerCase();
      onsole.log('Question5:',  question5);

if (question5 === 't') {
    alert(userName + ' you are CORRECT! Real Christmas trees are way better in every way, especially their amazing smell.');
    } else {
    alert('Well ' + userName +', you would think that the convenience and cost of a fake tree would win him over.  But no, fake trees just aren\'t all that festive.');
    }


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
