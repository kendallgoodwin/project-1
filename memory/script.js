var Card = function(x, y, height, width) {
	this.x = x;
	this.y = y;
	this.height = 180;
	this.width = 134;
}

Card.prototype.cardFaceDown = function() {
	// border(1);
	console.log(this.x, this.y, this.height, this.width);
}

var cards = [];

var numOfRows = 3;
var numOfCol = 6;

	for (var i = 0; i < numOfRows; i++) {
		for (var j = 0; j < numOfCol; j++) {
			cards.push(new Card(i, j));
		}
	}



	for (i = 0; i < cards.length; i++) {
		cards[i].cardFaceDown();
	}

