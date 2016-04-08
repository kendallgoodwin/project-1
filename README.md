Memory: Literary Alcoholics Edition
===================================
A traditional memory game with a sad, boozy twist. After clicking the Bottoms Up! button to begin the game and randomize the cards, each player clicks two cards per turn to reveal the notorious literary lush on the opposite side. If the cards are a match, they remain face-up and the player earns a point. If the cards are not match, they are turned back over and no points are earned. The game continues until all cards are face-up and matched, at which point the winner is declared on the right side of the screen. Click the Another Round! button to clear the scoreboard, then click Bottoms Up! again to randomize the cards and start a new game.


Approach
========
For this game, I began by laying out the board. I knew I wanted an odd number of matches so that there would always be a winner and that the elements of the game play (scoring, instructions, start button, etc.) should be a small column on the side, so I used Bootstrap to arrange a layout of cards that was 3 rows by 6 columns with game play on the side. 

Next, I created an array that held the image names of each of the 9 pairs of card faces. Once I figured out how to randomize the array, I assigned an array index to each card's unique id so that it would reveal the card faces at the designated index on click. Then, I determined how the turns would work. I set variable turns at zero, then set the checkSameImage function to fire after one turn (two clicks) and after the second turn (four clicks), then set turns back to 0 after four clicks. For each click per turn, the two images selected are pushed to a temporary array for comparison via the checkSameImage function. If the image names are the same, a match is recorded. If the image names are not the same, the cards are turned back over. After every turn, the array is emptied so that the next two selected cards can be compared. 

Then, I assigned an on click event that would add a class of "clicked" to the selected cards. If the cards were a match, the "clicked" class would be removed. If the cards were not a match, they would be located by that "clicked" class and their image source changed back to the static face down card image.

Once 9 matches have been recorded and all cards have been turned face-up, the getWinner function compares the recorded scores to determine and declare the winner of the round. 


Technologies Used 
=================
+ Bootstrap
+ jQuery
+ SweetAlerts
