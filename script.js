

var cardFaces = ["bukowski.jpg", "bukowski.jpg", "capote.jpg", "capote.jpg", "faulkner.jpg", "faulkner.jpg", "fitzgerald.jpg", 
				"fitzgerald.jpg", "hemingway.jpg", "hemingway.jpg", "joyce.jpg", "joyce.jpg", "kerouac.jpg", 
				"kerouac.jpg", "poe.jpg", "poe.jpg", "thompson.jpg", "thompson.jpg"];

var turns = 0;
var matches = 0;

var shuffledArray = [];
var tempArray = [];
var match = true;

//Fisher-Yates
var shuffleArray = function(array) {
    var currentIndex = cardFaces.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = cardFaces[currentIndex];
        cardFaces[currentIndex] = cardFaces[randomIndex];
        cardFaces[randomIndex] = temporaryValue;
    }
    // shuffledArray.push(array);
    return shuffledArray = array;
};

var playerOneArray = [];

$('#how-to').on('click', function(e) {
	// swal('Here/s a message!', 'It/s pretty, isn/t it?')
	alert('yo')
});

$('#start').on('click', function(e) {
	// console.log(shuffleArray(cardFaces));
	shuffleArray(cardFaces);
	console.log(shuffledArray);
	playerTurn.html('Player 1 turn')
	// letsPlay();
});

var playerTurn = $('#playerTurn')

function player2Turn() {
	playerTurn.html('Player 2 turn');
}

function player1Turn() {
	playerTurn.html('Player 1 turn')
}


$(".cards").on("click", function(e){
	if (e.currentTarget.id === 'card-1') {
		$(e.target).attr('src', shuffledArray[0]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[0]);
	} else if (e.currentTarget.id === 'card-2') {
		$(e.target).attr('src', shuffledArray[1]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[1]);
	} else if (e.currentTarget.id === 'card-3') {
		$(e.target).attr('src', shuffledArray[2]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[2]);
	} else if (e.currentTarget.id === 'card-4') {
		$(e.target).attr('src', shuffledArray[3]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[3]);
	} else if (e.currentTarget.id === 'card-5') {
		$(e.target).attr('src', shuffledArray[4]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[4]);
	} else if (e.currentTarget.id === 'card-6') {
		$(e.target).attr('src', shuffledArray[5]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[5]);
	} else if (e.currentTarget.id === 'card-7') {
		$(e.target).attr('src', shuffledArray[6]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[6]);
	} else if (e.currentTarget.id === 'card-8') {
		$(e.target).attr('src', shuffledArray[7]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[7]);
	} else if (e.currentTarget.id === 'card-9') {
		$(e.target).attr('src', shuffledArray[8]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[8]);
	} else if (e.currentTarget.id === 'card-10') {
		$(e.target).attr('src', shuffledArray[9]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[9]);
	} else if (e.currentTarget.id === 'card-11') {
		$(e.target).attr('src', shuffledArray[10]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[10]);
	} else if (e.currentTarget.id === 'card-12') {
		$(e.target).attr('src', shuffledArray[11]);
		$(e.target).addClass("clicked");
		// $(e.target).addClass("match");
		tempArray.push(shuffledArray[11]);
	} else if (e.currentTarget.id === 'card-13') {
		$(e.target).attr('src', shuffledArray[12]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[12]);
	} else if (e.currentTarget.id === 'card-14') {
		$(e.target).attr('src', shuffledArray[13]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[13]);
	} else if (e.currentTarget.id === 'card-15') {
		$(e.target).attr('src', shuffledArray[14]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[14]);
	} else if (e.currentTarget.id === 'card-16') {
		$(e.target).attr('src', shuffledArray[15]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[15]);
	} else if (e.currentTarget.id === 'card-17') {
		$(e.target).attr('src', shuffledArray[16]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[16]);
	} else if (e.currentTarget.id === 'card-18') {
		$(e.target).attr('src', shuffledArray[17]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[17]);
	};

	if (turns === 0) {
		console.log("player 1");
		console.log('turn ' + turns);
		console.log(tempArray);
		// playerTurn.html('It/s Player 1/s turn')
		turns++;
	} else if (turns === 1) {
		console.log("player 1111");
		console.log('turn ' + turns);
		turns++;
		console.log(tempArray);
		checkSameImage(tempArray);
		setTimeout(player2Turn, 1000)
	} else if (turns === 2) {
		console.log("player 2");
		console.log('turn ' + turns);
		console.log(tempArray);
		//display player 2
		playerTurn.html('Player 2 turn');
		turns++;
	} else if (turns === 3) {
		console.log("player 2222");
		console.log('turn ' + turns);
		turns = 0;
		checkSameImage(tempArray);
		setTimeout(player1Turn, 1000)
	}
});



var playerOneScore = 0;
var playerTwoScore = 0;

var runningScore1 = $('#playerOneScore')
var runningScore2 = $('#playerTwoScore')

function checkSameImage(array) {
	if ((array[0] === array[1]) && (turns === 2)) {
		console.log("MATCH");
		matchingCards();
		// console.log(tempArray[0]);
		// console.log(tempArray[1]);
		console.log(tempArray);
		tempArray = [];
		playerOneScore++;
		matches++;
		console.log('matches: ' + matches)
		console.log('player one score: ' + playerOneScore);
		runningScore1.html(playerOneScore);
	} else if ((array[0] === array[1]) && (turns === 0)) {
		console.log("MATCH");
		matchingCards();
		console.log(tempArray);
		tempArray = [];
		playerTwoScore++;
		matches++;
		console.log('matches: ' + matches)
		console.log('player two score: ' + playerTwoScore);

		runningScore2.html(playerTwoScore);
	} else {
		console.log(tempArray);
		console.log("NO MATCH");
		console.log('matches: ' + matches)
		setTimeout(turnOverCard, 1000);
		console.log('player one score: ' + playerOneScore);
		console.log('player two score: ' + playerTwoScore);
		tempArray = [];
	} 
	getWinner();
}; 




function turnOverCard(e) {
	$(".clicked").attr('src', 'm.jpg')
};

function matchingCards(e) {
	$(".clicked").removeClass("clicked");
}


var finalScore = $('#finalScore');

var getWinner = function() {
	var winner;
	if (matches < 9) {
		return;
	} else if (matches === 9 && playerOneScore > playerTwoScore) {
		// winner = Player 1;
		finalScore.html('Player 1 wins!')
		console.log('Player 1 wins');
	} else if (matches === 9 && playerOneScore < playerTwoScore) {
		// winner = Player 2;
		finalScore.html('Player 2 wins!')
		console.log('Player 2 wins')
	} 
};


// function matchingCardsPlayerOne(e) {
// 	$(".clicked").removeClass("clicked");
// 	// $(this).css("border", "blue");
// }

// function matchingCardsPlayerTwo(e) {
// 	$(".clicked").removeClass("clicked")
// }



// var playAgain = $('#reset');

$('#reset').on('click', function(e) {
	if (matches === 9) {
		// $('.images').attr('src', 'm.jpg');
	$('card-1').attr('src', 'm.jpg');
	$('card-2').attr('src', 'm.jpg');
	$('card-3').find('img').attr('src', 'm.jpg');
	$('card-4').find('img').attr('src', 'm.jpg');
	$('card-5').find('img').attr('src', 'm.jpg');
	$('card-6').find('img').attr('src', 'm.jpg');
	$('card-7').find('img').attr('src', 'm.jpg');
	$('card-8').find('img').attr('src', 'm.jpg');
	$('card-9').find('img').attr('src', 'm.jpg');
	$('card-10').find('img').attr('src', 'm.jpg');
	$('card-11').find('img').attr('src', 'm.jpg');
	$('card-12').find('img').attr('src', 'm.jpg');
	$('card-13').find('img').attr('src', 'm.jpg');
	$('card-14').find('img').attr('src', 'm.jpg');
	$('card-15').find('img').attr('src', 'm.jpg');
	$('card-16').find('img').attr('src', 'm.jpg');
	// console.log('this works');
	}
})