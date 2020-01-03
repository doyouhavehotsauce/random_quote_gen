/******************************************
project 1 - A Random Quote Generator
******************************************/


let randomQuote = '';
let randomBgColor = '';
let quoteAuthor = '';
let quoteCitation = '';
let quoteYear;
let getQuote;
let printTheQuote = '';





// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/************ 
  quotes array 
*************/
let quotes = [
  { quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.', 
    author: 'Bill Watterson', 
    citation: 'Calvin and Hobbes',
    year: 1988
  },
  { quote: 'You know what\'s weird? Day by day, nothing seems to change, but pretty soon...everything\'s different', 
    author: 'Bill Watterson', 
    citation: 'Calvin and Hobbes',
    year: 1989
  },
  { quote: 'You’ve got to be very careful if you don’t know where you are going, because you might not get there', 
    author: 'Yogi Berra', 
    citation: 'Source Unknown',
    year: 1973
  },
  { quote: 'You’ll miss the best things if you keep your eyes shut. Sometimes the questions are complicated and the answers are simple.', 
    author: 'Dr. Seuss', 
    citation: 'Source Unknown',
    year: 1964
  },
  { quote: 'This must be Thursday,\' said Arthur to himself, sinking low over his beer. \'I never could get the hang of Thursdays.', 
    author: 'Douglas Adams', 
    citation: 'The Hitchhikers Guide to the Galaxy',
    year: 1978
  },
  { quote: 'I never trust people with no appetite. It’s like they’re always holding something back on you.', 
    author: 'Haruki Murakami', 
    citation: 'Hard-Boiled Wonderland and the End of the World',
    year: 2004
  },
  { quote: 'Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.', 
    author: 'Neil Gaiman', 
    citation: 'The Sandman, Vol. 6: Fables and Reflections',
    year: 2006
  },
  { quote: 'Laugh hard, it’s a long way to the bank.', 
    author: 'Modest Mouse', 
    citation: 'Paper Thin Walls',
    year: 2002
  },
  { quote: 'I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.', 
    author: 'Dr. Who', 
    citation: 'Season 6, Episode 6 - \'The Almost People\'',
    year: ''
  },
  { quote: 'I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.', 
    author: 'Dr. Who', 
    citation: 'Season 6, Episode 6 - \'The Almost People\'',
    year: '2974'
  }

]
/************ 
random colors array
*************/
let bgcolors = [
{ color: '#e8c2f2'},
{ color: '#6cafd9'},
{ color: '#ffb00d'},
{ color: '#3a2073'},
{ color: '#9ce8e8'},
{ color: '#F2594B'},
{ color: '#3B6670'},
{ color: '#FF9D7A'}

]




/************ 
Random Color function
************/
function getRandomBgColor(){
  //Get a random number between 0 & 7 - the length of colors array
  const randomColor = Math.floor(Math.random() * (bgcolors.length) ) ;

  randomBgColor = bgcolors[randomColor].color;

  document.body.style.backgroundColor = randomBgColor;
}
 




/************ 
Random Quote function
************/
function getRandomQuote(){
//Get a random number between 0 & 9 - the length of the quotes arrayor
  const randomNum = Math.floor(Math.random() * (quotes.length) ) ;

  randomQuote = quotes[randomNum].quote;
  quoteAuthor = quotes[randomNum].author;
  quoteCitation = quotes[randomNum].citation;
  quoteYear = quotes[randomNum].year;
  
  getRandomBgColor();
} 


/************ 
 printQuote function
************/
function printQuote(){

  getQuote = getRandomQuote();

  printTheQuote = '<p class="quote">' + randomQuote + '</p>';
  printTheQuote += '<p class="source">' + quoteAuthor ;

  if (quoteCitation !== 'undefined' ){
    printTheQuote += '  <span class="citation">'+ quoteCitation + '</span>';
  }
  if ( quoteYear !== 'undefined') {
    printTheQuote += '<span class="year">' + quoteYear + '</span></p>';
  }

  document.getElementById('quote-box').innerHTML = printTheQuote;
}








/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);