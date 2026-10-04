// =====================================
// TEACHER'S DAY WEBSITE
// INTERACTION
// =====================================


// =====================================
// 1. BEGIN THE JOURNEY
// =====================================

const beginJourney = document.getElementById("beginJourney");

beginJourney.addEventListener("click", function () {

    document.getElementById("inspiration").scrollIntoView({
        behavior: "smooth"
    });

});


// =====================================
// 2. NEXT SECTION BUTTONS
// =====================================

const sections = document.querySelectorAll("body > main > section");

sections.forEach(function (section, index) {

    if (index === sections.length - 1) {
        return;
    }

    const nextButton = document.createElement("button");
 
    nextButton.className = "next-section-btn";
    nextButton.textContent = "Continue the Journey ↓";

    nextButton.addEventListener("click", function () {

        sections[index + 1].scrollIntoView({
            behavior: "smooth"
        });

    });

    section.appendChild(nextButton);

});


// =====================================
// 3. JOURNEY / TIMELINE
// =====================================

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach(function (item) {

    const paragraph = item.querySelector("p");

    paragraph.style.display = "none";

    item.addEventListener("click", function () {

        paragraph.style.display =
            paragraph.style.display === "none"
                ? "block"
                : "none";

        item.classList.toggle("active");

    });

});


// =====================================
// 4. APPRECIATION FLIP CARDS
// =====================================

const cards = document.querySelectorAll(".card");

const cardMessages = {
    "Inspiration":
        "A great teacher makes us believe that we can discover something new.",

    "Knowledge":
        "Knowledge becomes meaningful when it helps us understand the world better.",

    "Motivation":
        "Sometimes a few encouraging words are enough to make us keep going.",

    "Guidance":
        "Good guidance helps us find our own direction and grow with confidence."
};


cards.forEach(function (card) {

    const title = card.querySelector("h3").textContent;

    const back = document.createElement("div");

    back.className = "card-back";

    back.innerHTML = `
        <h3>${title}</h3>
        <p>${cardMessages[title]}</p>
        <small>Click to flip back</small>
    `;

    card.appendChild(back);

    card.addEventListener("click", function () {

        card.classList.toggle("flipped");

    });

});


// =====================================
// 5. QUIZ
// =====================================

const quizButtons =
    document.querySelectorAll(".quiz-options button");

const quizResult =
    document.getElementById("quizResult");


quizButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        quizButtons.forEach(function (btn) {
            btn.classList.remove("correct");
            btn.classList.remove("wrong");
        });

        if (button.id === "correctAnswer") {

            button.classList.add("correct");

            quizResult.textContent =
                "Exactly! 🌟 Real learning comes from understanding, curiosity and exploring ideas.";

        } else {

            button.classList.add("wrong");

            quizResult.textContent =
                "Good thought! 💡 But learning becomes stronger when we understand and explore, not just memorize.";

        }

    });

});


// =====================================
// 6. LEARNING CARDS
// =====================================

const learningCards =
    document.querySelectorAll(".teach-cards > div");


const learningMessages = [
    "HTML gives the website its structure.",
    "CSS turns that structure into a visual design.",
    "JavaScript gives the website interaction and movement."
];


learningCards.forEach(function (card, index) {

    card.addEventListener("click", function () {

        const oldMessage = card.querySelector(".learning-message");

        if (oldMessage) {
            oldMessage.remove();
            return;
        }

        const message = document.createElement("p");

        message.className = "learning-message";
        message.textContent = learningMessages[index];

        card.appendChild(message);

    });

});
// =====================================
// 07. MOMENTS & MEMORIES
// =====================================

const memoryCards = document.querySelectorAll(".memory-grid > div");

const memoryMessages = [
    "We learned so much from your lessons and the way you explain things. 📖",

    "You showed us how technology can turn simple ideas into something meaningful. 💻",

    "Sometimes a simple idea is all it takes to start a project. This website itself began with one such idea. 💡",

    "That little idea became a real project — something created to keep learning, exploring and building for the future. 🌟"
];

memoryCards.forEach(function (card, index) {

    card.addEventListener("click", function () {

        let message = card.querySelector(".memory-message");

        if (message) {
            message.remove();
            return;
        }

        message = document.createElement("p");

        message.className = "memory-message";
        message.textContent = memoryMessages[index];

        card.appendChild(message);

    });

});

// =====================================
// 8. OPEN THE LETTER
// =====================================

const openMessage =
    document.getElementById("openMessage");

const letter =
    document.getElementById("letter");


openMessage.addEventListener("click", function () {

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {

        openMessage.textContent = "Close the Letter ↑";

    } else {

        openMessage.textContent = "Open the Letter 💌";

    }

});


// =====================================
// 9. SURPRISE REVEAL
// =====================================

const surpriseBtn =
    document.getElementById("surpriseBtn");

const secretMessage =
    document.getElementById("secretMessage");


surpriseBtn.addEventListener("click", function () {

    secretMessage.textContent =
        "The best part of learning is realizing that one person can inspire you to discover something you never knew you could create. ❤️";

    secretMessage.classList.add("show");

    surpriseBtn.textContent = "Surprise Revealed ✨";

});


// =====================================
// 10. FINAL MESSAGE
// =====================================

const finalSection =
    document.getElementById("final");

finalSection.addEventListener("click", function () {

    finalSection.querySelector("h2").textContent =
        "Happy Teacher's Day! 🌷❤️";

});
