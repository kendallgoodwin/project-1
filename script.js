




$('#how-to').on('click', function(e) {
	// swal('Here/s a message!', 'It/s pretty, isn/t it?')
	alert('yo')
	console.log('this works');
});

$('#start').on('click', function(e) {
	console.log(shuffleArray(cardFaces));
	shuffleArray(cardFaces);
	letsPlay();
});




$('#card-1').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
	// $(this).find('img').attr('src', 'kerouac.jpg');
})

$('#card-2').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-3').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-4').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-5').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-6').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-7').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-8').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-9').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-10').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-11').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-12').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-13').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-14').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-15').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-16').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-17').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

$('#card-18').on('click', function(e) {
	console.log('this works');
	displayImage();
	// letsPlay();
})

var faceDownCard = "m.jpg";

var cardFaces = ["capote.jpg", "capote.jpg", "faulkner.jpg", "faulkner.jpg", "fitzgerald.jpg", 
				"fitzgerald.jpg", "hemingway.jpg", "hemingway.jpg", "joyce.jpg", "joyce.jpg", "kerouac.jpg", 
				"kerouac.jpg", "poe.jpg", "poe.jpg", "thompson.jpg", "thompson.jpg"];


// var divs = $('#images');

// while (divs.length > 0) {
//     var i = Math.floor(Math.random() * cardFaces.length);
//     divs[0].style.backgroundImage = cardFaces[i];
//     cardFaces.splice(i, 1);
//     divs = [].slice.call(divs, 1);




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
    return array;
};


// var shuffledArray = [];


var displayImage = function(e) {
	var target = $(event.target);
	for (i = 1; i < cardFaces.length; i++) {
			$(target).attr('src', cardFaces[i]);
	}
};


// var setImages = function() {
// 	$('div.images').each(function(index) {
// 		for (i = 0; i < 'div.images'.length; i++) {
//     // set div id to array value
//     		$('div').attr('src', cardFaces[i]);
// 		}
// 	})
// };

var clicks = 0;

var playerOneScore = 0;
var playerTwoScore = 0;

var letsPlay = function(e) {
	var target = $(event.target);

	$(target).on('click', function(e) {
		displayImage();
	}); 
}
	// if (clicks % 2 !=== 0) {
	// 	return;
	// } else if 

// var playerOneTurn = function() {
// 	if (clicks === 2) {
// 		clicks;
// 		playerOneScore++;
// 		console.log(playerOneScore)
// 	}
// };

// var playerTwoTurn = function() {
// 	if (clicks === 4) {
// 		playerTwoScore++;
// 	}
// 	clicks = 0;
// }


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