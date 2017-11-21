// create an array of words
var word = ['Braves', 'Marlin', 'Giants'];

//choose word randomly
	let randNum = Math.floor(Math.random() * word.length);

	var hiddenWord = [];

	for (var i = 0; i < word.length; i++) {
		hiddenWord.push(" _ ");

	}
	
	$( ".underscore" ).append( hiddenWord.join(" ") );

	let choosenWord = word[randNum];
	
	let rightWord = [];
	
	let wrongWord = [];
	
	let underScore = [];

console.log(choosenWord);

let docUnderScore = document.getElementsByClassName('underscore').innerHtml;

let docRightGuess = document.getElementsByClassName('rightGuess');

let docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(choosenWord);

//create underscores based on length of word

let generateUnderscore = () => {

	for(let i = 0; i < choosenWord.length; i++) {

		underScore.push('_');
	}

	return underScore;
}


// Get users guess
$(document).onkeyup(function(event) {
	
	let keyword = event.key;
	console.log(keyword)

	if (choosenWord.indexof(keyword) > -1) {

		rightWord.push(keyword);

		underScore[choosenWord.indexof(keyword)] = keyword;

			docUnderScore[0].innerHtml = underScore.join(' ');
			docRightGuess[0].innerHtml = rightWord;

		if (underScore.join('') == choosenWord) {

			alert('You Win');
		}
		
		wrongWord.push(keyword);	
		docWrongGuess[0].innerHtml = wrongWord;
	}
});

generateUnderscore().join(' ');

underScore[0].innerHtml = 'Working';
//check if guess is right

//if right push to right array
//if wrong push to wrong array