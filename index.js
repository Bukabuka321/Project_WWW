const AboutUs = document.querySelector(".AboutUs");

class CardAboutUs {
    constructor(title, picture, text) {
        this.title = title;
        this.picture = picture;
        this.text = text;
    }
}

const whoWeAre = new CardAboutUs("Who we are", "🦆 emoji _who we.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const whatWeDo = new CardAboutUs("What we do", "🦆 emoji _hacker cat_.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const ourGoals = new CardAboutUs("Our goals", "🦆 emoji _goals.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");

const cards = [whoWeAre, whatWeDo, ourGoals];

function createCard(cardObject) {
    const card = document.createElement("div");
    card.classList.add("cardAboutUs");
    AboutUs.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = `${cardObject.title}`;
    cardHeader.appendChild(cardTitle);

    const cardImg = document.createElement("img");
    cardImg.src = `images/${cardObject.picture}`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `${cardObject.text}`;
    card.appendChild(cardBody);
}

cards.forEach((cardObj) => {
    createCard(cardObj);
})
