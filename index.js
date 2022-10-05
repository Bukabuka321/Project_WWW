const aboutUs = document.querySelector(".AboutUs");
class CardAboutUs {
    constructor(title, picture, text) {
        this.title = title;
        this.picture = picture;
        this.text = text;
    }
}
const whoWeAre = new CardAboutUs("Who we are", "emoji _who we.png", "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const whatWeDo = new CardAboutUs("What we do", "emoji _hacker cat_.png", "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const ourGoals = new CardAboutUs("Our goals", "emoji _goals.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");

const cards = [whoWeAre, whatWeDo, ourGoals];

function createCard(objCard) {
    const card = document.createElement("div");
    card.classList.add("CardAboutUs");
    aboutUs.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = `${objCard.title}`;
    cardHeader.appendChild(cardTitle);

    const cardImg = document.createElement("img");
    cardImg.src = `assets/${objCard.picture}`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("p");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `${objCard.text}`;
    card.appendChild(cardBody);
}
cards.forEach((cardObj) => {
    createCard(cardObj);
})
