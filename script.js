


var cardFaces = ["bukowski.jpg", "bukowski.jpg", "capote.jpg", "capote.jpg", "faulkner.jpg", "faulkner.jpg", "fitzgerald.jpg", 
				"fitzgerald.jpg", "hemingway.jpg", "hemingway.jpg", "joyce.jpg", "joyce.jpg", "kerouac.jpg", 
				"kerouac.jpg", "poe.jpg", "poe.jpg", "thompson.jpg", "thompson.jpg"];

var turns = 0;
var matches = 0;

var shuffledArray = [];
var tempArray = [];
var turnTimeout;
var gameOver = false;


var shuffleArray = function(array) {
    var currentIndex = cardFaces.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = cardFaces[currentIndex];
        cardFaces[currentIndex] = cardFaces[randomIndex];
        cardFaces[randomIndex] = temporaryValue;
    }
    return shuffledArray = array;
};

$('#how-to').on('click', function(e) {
	swal("How To Play", "Click on Bottoms Up! to begin. Select two cards per turn. Player with the most matches wins!");
});

$('#start').on('click', function(e) {
	shuffleArray(cardFaces);
	console.log(shuffledArray);
	playerTurn.html('Player 1 turn')
});

var playerTurn = $('#playerTurn')

function player2Turn() {
	if (gameOver) {
		playerTurn.html(' ');
	} else {
		playerTurn.html('Player 2 turn');
	}
}

function player1Turn() {
	if (gameOver) {
		playerTurn.html(' ');
	} else {
		playerTurn.html('Player 1 turn');
	}
}


$(".cards").on("click", function(e){
	console.log("click src", e.target.src)
	if ($(e.target).hasClass('clicked') || !e.target.src.endsWith("m.jpg") ) {
		return;
	} else if (e.currentTarget.id === 'card-1') {
		$(e.target).attr('src', shuffledArray[0]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[0]);
	} else if (e.currentTarget.id === 'card-2') {
		$(e.target).attr('src', shuffledArray[1]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[1]);
	} else if (e.currentTarget.id === 'card-3') {
		$(e.target).attr('src', shuffledArray[2]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[2]);
	} else if (e.currentTarget.id === 'card-4') {
		$(e.target).attr('src', shuffledArray[3]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[3]);
	} else if (e.currentTarget.id === 'card-5') {
		$(e.target).attr('src', shuffledArray[4]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[4]);
	} else if (e.currentTarget.id === 'card-6') {
		$(e.target).attr('src', shuffledArray[5]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[5]);
	} else if (e.currentTarget.id === 'card-7') {
		$(e.target).attr('src', shuffledArray[6]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[6]);
	} else if (e.currentTarget.id === 'card-8') {
		$(e.target).attr('src', shuffledArray[7]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[7]);
	} else if (e.currentTarget.id === 'card-9') {
		$(e.target).attr('src', shuffledArray[8]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[8]);
	} else if (e.currentTarget.id === 'card-10') {
		$(e.target).attr('src', shuffledArray[9]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[9]);
	} else if (e.currentTarget.id === 'card-11') {
		$(e.target).attr('src', shuffledArray[10]);
		$(e.target).addClass("clicked");
		tempArray.push(shuffledArray[10]);
	} else if (e.currentTarget.id === 'card-12') {
		$(e.target).attr('src', shuffledArray[11]);
		$(e.target).addClass("clicked");
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
		turns++;
	} else if (turns === 1) {
		console.log("player 1111");
		console.log('turn ' + turns);
		turns++;
		console.log(tempArray);
		checkSameImage(tempArray);
		turnTimeout = setTimeout(player2Turn, 800);
	} else if (turns === 2) {
		console.log("player 2");
		console.log('turn ' + turns);
		console.log(tempArray);
		playerTurn.html('Player 2 turn');
		turns++;
	} else if (turns === 3) {
		console.log("player 2222");
		console.log('turn ' + turns);
		turns = 0;
		checkSameImage(tempArray);
		turnTimeout = setTimeout(player1Turn, 800);
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
		console.log(tempArray);
		tempArray = [];
		playerOneScore++;
		matches++;
		console.log('matches: ' + matches)
		runningScore1.html(playerOneScore);
	} else if ((array[0] === array[1]) && (turns === 0)) {
		console.log("MATCH");
		matchingCards();
		console.log(tempArray);
		tempArray = [];
		playerTwoScore++;
		matches++;
		console.log('matches: ' + matches)
		runningScore2.html(playerTwoScore);
	} else {
		console.log(tempArray);
		console.log("NO MATCH");
		console.log('matches: ' + matches)
		setTimeout(turnOverCard, 800);
		tempArray = [];
	} 

	getWinner();
}; 


function turnOverCard(e) {
	$(".clicked").attr('src', 'm.jpg');
	$(".clicked").removeClass("clicked");
};

function matchingCards(e) {
	$(".clicked").removeClass("clicked");
}


var finalScore = $('#finalScore');

var getWinner = function() {
	if (matches < 9) {
		return;
	} else if (matches === 9 && playerOneScore > playerTwoScore) {
		gameOver = true;
		playerTurn.html(' ');
		clearTimeout(turnTimeout);
		finalScore.html('Player 1 wins!');
		console.log('Player 1 wins');
	} else if (matches === 9 && playerOneScore < playerTwoScore) {
		gameOver = true;
		playerTurn.html(' ');
		clearTimeout(turnTimeout);
		finalScore.html('Player 2 wins!');
		console.log('Player 2 wins')
	} 
};

$('#reset').on('click', function(e) {
	if (matches === 9) {
		$('#card-1 img').attr('src', 'm.jpg');
		$('#card-2 img').attr('src', 'm.jpg');
		$('#card-3 img').attr('src', 'm.jpg');
		$('#card-4 img').attr('src', 'm.jpg');
		$('#card-5 img').attr('src', 'm.jpg');
		$('#card-6 img').attr('src', 'm.jpg');
		$('#card-7 img').attr('src', 'm.jpg');
		$('#card-8 img').attr('src', 'm.jpg');
		$('#card-9 img').attr('src', 'm.jpg');
		$('#card-10 img').attr('src', 'm.jpg');
		$('#card-11 img').attr('src', 'm.jpg');
		$('#card-12 img').attr('src', 'm.jpg');
		$('#card-13 img').attr('src', 'm.jpg');
		$('#card-14 img').attr('src', 'm.jpg');
		$('#card-15 img').attr('src', 'm.jpg');
		$('#card-16 img').attr('src', 'm.jpg');
		$('#card-17 img').attr('src', 'm.jpg');
		$('#card-18 img').attr('src', 'm.jpg');

		turns = 0;
		matches = 0;
		playerOneScore = 0;
		playerTwoScore = 0;
		finalScore.html(' ');
		runningScore1.html(' ');
		runningScore2.html(' ');
		playerTurn.html(' ');
		gameOver = false;
	}
})