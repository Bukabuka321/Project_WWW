const aboutUs = document.querySelector(".AboutUs");
class CardAboutUs {
    constructor(title, picture, text) {
        this.title = title;
        this.picture = picture;
        this.text = text;
    }
}
const whoWeAre = new CardAboutUs("Who we are", "emoji _who we.png", "We are a small team of talented beginner web-developers. We are creative and optimistic people. We are ready for new knowledge. We are open-minded and look forward to having new members join our Team");
const whatWeDo = new CardAboutUs("What we do", "emoji _hacker cat_.png", "We are learning, improving and communicating well with others. We are sharing our knowledge and helping each other. We are writing the clean, readable code. And we are enjoying our work!");
const ourGoals = new CardAboutUs("Our goals", "emoji _goals.png", "Keeping up to date with the web developer industry and with professional designing. Creating visually appealing and user-friendly websites. Making the websites that we build for clients even better. Being able to manage time and prioritize tasks. Receiving feedback  and improving ourselves");

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
    cardImg.src = `assets/images/${objCard.picture}`;
    cardImg.classList.add("card-img");
    cardImg.width = 65;
    cardImg.height = 65;
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("p");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `${objCard.text}`;
    card.appendChild(cardBody);
}
cards.forEach((cardObj) => {
    createCard(cardObj);
})
