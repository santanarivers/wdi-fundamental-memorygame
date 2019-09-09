console.log("up and running!");

var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];
 var cardInPlay = [];




function checkForMatch(){
  if (cardInPlay[0] === cardInPlay[1]) 
  {
  alert("You found a match!");
}  else {
  alert("Sorry, try again.");
  }
}

 function flipCard(cardId){ 
   console.log("User flipped " + cards[cardId].rank);
  cardInPlay.push(cards[cardId].rank);
  console.log(cards[cardId] .cardImage);
  console.log(cards[cardId] .suit);
}
   if (cardInPlay.length === 2) {
   checkForMatch();
   }
 

 flipCard(0);
 flipCard(2);

checkForMatch();
  






