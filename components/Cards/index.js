// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data);
    response.data.articles.bootstrap.forEach(info => {
      const newCard1 = newCard(info)
      createCard.appendChild((newCard1));
    })
  })
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    response.data.articles.javascript.forEach(info => {
      const newCard1 = newCard(info)
      createCard.appendChild((newCard1));
    })
  })
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    response.data.articles.jquery.forEach(info => {
      const newCard1 = newCard(info)
      createCard.appendChild((newCard1));
    })
  })
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    response.data.articles.node.forEach(info => {
      const newCard1 = newCard(info)
      createCard.appendChild((newCard1));
    })
  })
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    response.data.articles.technology.forEach(info => {
      const newCard1 = newCard(info)
      createCard.appendChild((newCard1));
    })
  })

  .catch(error => {
    console.log('The data was not returned', error);
  });

function newCard(info) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('headline');
  cardTitle.textContent = info.headline;

  const cardAuthor = document.createElement('div');
  cardAuthor.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const cardImg = document.createElement('img');
  cardImg.src = info.authorPhoto;

  const cardName = document.createElement('span');
  cardName.textContent = `By: ${info.authorName}`;

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(imgContainer);
  imgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardName);

  return card;
}
const createCard = document.querySelector('.cards-container');