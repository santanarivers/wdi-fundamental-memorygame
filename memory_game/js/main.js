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


function createBoard(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('class', 'unflipped');
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
};
};

 function flipCard(){ 
  if (this.getAttribute('class') === "unflipped"){
    var cardId = this.getAttribute('data-id');

   console.log("User flipped " + cards[cardId].rank);
  
  cardInPlay.push(cards[cardId].rank);
  console.log(cards[cardId] .cardImage);
  console.log(cards[cardId] .suit);

    this.setAttribute('src', cards[cardId].cardImage);
    this.setAttribute('class', 'flipped');

}
   if (cardInPlay.length === 2) {
   checkForMatch();
   }
 }
 


createBoard();
checkForMatch();
  






