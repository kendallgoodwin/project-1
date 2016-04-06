

var cardFaces = ["bukowski.jpg", "bukowski.jpg", "capote.jpg", "capote.jpg", "faulkner.jpg", "faulkner.jpg", "fitzgerald.jpg", 
				"fitzgerald.jpg", "hemingway.jpg", "hemingway.jpg", "joyce.jpg", "joyce.jpg", "kerouac.jpg", 
				"kerouac.jpg", "poe.jpg", "poe.jpg", "thompson.jpg", "thompson.jpg"];

var turns = 0;

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

	// letsPlay();
});




$(".cards").on("click", function(e){
	console.log(e);

	if (e.currentTarget.id === 'card-1') {
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
	// } else if (e.currentTarget.id === 'card-13') {
	// 	$(e.target).attr('src', shuffledArray[12]);
	// 	tempArray.push(shuffledArray[12]);
	// } else if (e.currentTarget.id === 'card-14') {
	// 	$(e.target).attr('src', shuffledArray[13]);
	// 	tempArray.push(shuffledArray[13]);
	// } else if (e.currentTarget.id === 'card-15') {
	// 	$(e.target).attr('src', shuffledArray[14]);
	// 	tempArray.push(shuffledArray[14]);
	// } else if (e.currentTarget.id === 'card-16') {
	// 	$(e.target).attr('src', shuffledArray[15]);
	// 	tempArray.push(shuffledArray[15]);
	// } else if (e.currentTarget.id === 'card-17') {
	// 	$(e.target).attr('src', shuffledArray[16]);
	// 	tempArray.push(shuffledArray[16]);
	// } else if (e.currentTarget.id === 'card-18') {
	// 	$(e.target).attr('src', shuffledArray[17]);
	// 	tempArray.push(shuffledArray[17]);
	};

	if (turns === 0) {
		console.log("player 1");
		console.log('turn ' + turns);
		console.log(tempArray);
		//display player 1
		// playerOneArray.push()
		//if pics match player1score++
		//checkwinner function - if player1score = 10 alertmsg; else return nothing
		turns++;
	} else if (turns === 1) {
		console.log("player 1111");
		console.log('turn ' + turns);
		turns++;
		console.log(tempArray);
		checkSameImage(tempArray);
	} else if (turns === 2) {
		console.log("player 2");
		console.log('turn ' + turns);
		console.log(tempArray);
		//display player 2
		turns++;
	} else if (turns === 3) {
		console.log("player 2222");
		console.log('turn ' + turns);
		turns = 0;
		checkSameImage(tempArray);
	}
});



var playerOneScore = 0;
var playerTwoScore = 0;

function checkSameImage(array) {
	if ((array[0] === array[1]) && (turns === 2)) {
		console.log("MATCH");
		matchingCards();
		// console.log(tempArray[0]);
		// console.log(tempArray[1]);
		console.log(tempArray);
		tempArray = [];
		playerOneScore++;
		console.log('player one score: ' + playerOneScore);
	} else if ((array[0] === array[1]) && (turns === 0)) {
		console.log("MATCH");
		matchingCards();
		console.log(tempArray);
		playerTwoScore++;
		console.log('player two score: ' + playerTwoScore);
		tempArray = [];
	} else {
		match = false;
		console.log(tempArray);
		console.log("NO MATCH");
		//$(".clicked").attr("src", "m.jpg")



		// console.log(array[0]);
		// console.log(array[1]);
		// setTimeout(function() {
		// 	turnOverCard("card-1");
		// 	turnOverCard("card-2");
		// }, 3000);
		setTimeout(turnOverCard, 3000);

		console.log('player one score: ' + playerOneScore);
		console.log('player two score: ' + playerTwoScore);
		tempArray = [];
	}
}; 




function turnOverCard(e) {
	$(".clicked").attr('src', 'm.jpg')
};

function matchingCards(e) {
	$(".clicked").removeClass("clicked");
}

// function matchingCardsPlayerTwo(e) {
// 	$(".clicked").removeClass("clicked")
// }

// function turnOverCard(e) {
// 	$(e.target).attr('src', 'm.jpg')
// };


// $('#card-1').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[0]);
// 	console.log(shuffledArray[0]);
// 	tempArray.push(shuffledArray[0]);
// })

// $('#card-2').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[1]);
// 	console.log(shuffledArray[1]);
// 	tempArray.push(shuffledArray[1]);
// 	// console.log(tempArray);
// })

// $('#card-3').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[2]);
// 	console.log(shuffledArray[2]);
// 	tempArray.push(shuffledArray[2]);
// })

// $('#card-4').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[3]);
// 	console.log(shuffledArray[3]);
// 	tempArray.push(shuffledArray[3]);
// })

// $('#card-5').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[4]);
// 	console.log(shuffledArray[4]);
// 	tempArray.push(shuffledArray[4]);
// })

// $('#card-6').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[5]);
// 	console.log(shuffledArray[5]);
// 	tempArray.push(shuffledArray[5]);
// })

// $('#card-7').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[6]);
// 	console.log(shuffledArray[6]);
// 	tempArray.push(shuffledArray[6]);
// })

// $('#card-8').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[7]);
// 	console.log(shuffledArray[7]);
// 	tempArray.push(shuffledArray[7]);
// })

// $('#card-9').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[8]);
// 	console.log(shuffledArray[8]);
// 	tempArray.push(shuffledArray[8]);
// })

// $('#card-10').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[9]);
// 	console.log(shuffledArray[9]);
// 	tempArray.push(shuffledArray[9]);
// })

// $('#card-11').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[10]);
// 	console.log(shuffledArray[10]);
// 	tempArray.push(shuffledArray[10]);
// })

// $('#card-12').on('click', function(e) {
// 	$(e.target).attr('src', shuffledArray[11]);
// 	console.log(shuffledArray[11]);
// 	tempArray.push(shuffledArray[11]);
// })

$('#card-13').on('click', function(e) {
	$(e.target).attr('src', shuffledArray[12]);
	$(e.target).addClass("clicked");
	tempArray.push(shuffledArray[12]);
})

$('#card-14').on('click', function(e) {
	$(e.target).attr('src', shuffledArray[13]);
	$(e.target).addClass("clicked");
	tempArray.push(shuffledArray[13]);
})

$('#card-15').on('click', function(e) {
	$(e.target).attr('src', shuffledArray[14]);
	$(e.target).addClass("clicked");
	tempArray.push(shuffledArray[14]);
})

$('#card-16').on('click', function(e) {
	$(e.target).attr('src', shuffledArray[15]);
	$(e.target).addClass("clicked");
	tempArray.push(shuffledArray[15]);
})

$('#card-17').on('click', function(e) {
	$(e.target).attr('src', shuffledArray[16]);
	$(e.target).addClass("clicked");
	tempArray.push(shuffledArray[16]);
})

$('#card-18').on('click', function(e) {
	$(e.target).attr('src', shuffledArray[17]);
	$(e.target).addClass("clicked");
	tempArray.push(shuffledArray[17]);
})


// var displayImage = function(e) {
// 	var target = $(event.target);
// 	$(target).attr('src', shuffledArray[0]);
// 	usedImages.push(shuffledArray[0]);
// };


// var getWinner = function() {
// 	var winner;
// 	if (playerOneScore > playerTwoScore) {
// 		winner = playerOne;
// 		console.log('Player One wins');
// 	} else if (playerOneScore === playerTwoScore) {
// 		winner = tie;
// 		console.log("It/s a tie!");
// 	} else {
// 		winner = playerTwo;
// 		console.log('Player Two wins')
// 	}
// }


// var playAgain = $('#reset');

// $(playAgain).on('click', function(e) {
// 	$('images').attr('src', 'm.jpg');
// 	// $('card-1').find('img').attr('src', 'm.jpg');
// 	// $('card-2').find('img').attr('src', 'm.jpg');
// 	// $('card-3').find('img').attr('src', 'm.jpg');
// 	// $('card-4').find('img').attr('src', 'm.jpg');
// 	// $('card-5').find('img').attr('src', 'm.jpg');
// 	// $('card-6').find('img').attr('src', 'm.jpg');
// 	// $('card-7').find('img').attr('src', 'm.jpg');
// 	// $('card-8').find('img').attr('src', 'm.jpg');
// 	// $('card-9').find('img').attr('src', 'm.jpg');
// 	// $('card-10').find('img').attr('src', 'm.jpg');
// 	// $('card-11').find('img').attr('src', 'm.jpg');
// 	// $('card-12').find('img').attr('src', 'm.jpg');
// 	// $('card-13').find('img').attr('src', 'm.jpg');
// 	// $('card-14').find('img').attr('src', 'm.jpg');
// 	// $('card-15').find('img').attr('src', 'm.jpg');
// 	// $('card-16').find('img').attr('src', 'm.jpg');
// 	console.log('this works');
// })