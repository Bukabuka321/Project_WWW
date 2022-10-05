const AboutUs = document.querySelector(".AboutUs");
class cardAboutUs {
    constructor(title, picture, text) {
        this.title = title;
        this.picture = picture;
        this.text = text;
    }
}
const WhoWeAre = new cardAboutUs("Who we are", "emoji_who we.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const WhatWeDo = new cardAboutUs("What we do", "emoji_hacker cat.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const OurGoals = new cardAboutUs("Our goals", "emoji_goals.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");

function createCard(title, picture, text) {
    const card = document.createElement("div");
    card.classList.add("cardAboutUs");
    AboutUs.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardAboutUs.appendChild(cardHeader);

    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = `${title}`;
    cardHeader.appendChild(cardTitle);

    const cardImg = document.createElement("div");
    cardImg.src = `${picture}`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `${text}`;
    cardAboutUs.appendChild(cardBody);

}

createCard(WhoWeAre);
createCard(WhatWeDo);
createCard(OurGoals);
