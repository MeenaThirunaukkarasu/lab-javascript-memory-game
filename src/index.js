const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here

      if (memoryGame.pickedCards.length > 1) {
        // disable clicks after 2 cards are picked
        return
      }
      else {
        memoryGame.pickedCards.push(card)
        card.classList.add("turned")

        if (memoryGame.pickedCards.length == 2) // second card
        {
          const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
          const card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")

          const isPair = memoryGame.checkIfPair(card1, card2)
          document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked;

          if (isPair){
            document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed;
            setTimeout(() => {
              memoryGame.pickedCards = [];
            }, 1000)
          }
          else {
            setTimeout(() => {
              memoryGame.pickedCards.forEach(card => card.classList.remove("turned"));
              memoryGame.pickedCards = [];
            }, 1000)
          }

          if (memoryGame.checkIfFinished()) {
            alert("hayoooooo")
          }
        }
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
