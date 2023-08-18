const quotes = [
    {
        text: "Cricket as a passion is distinctly contagious",
        author: "Virat kohli",
        category: "inspirational"
    },
    {
        text: "Enjoy the game and chase your dreams. Dreams do come true!",
        author: "Ab de villiers",
        category: "inspirational"
    },
    {
        text: "Cricket is quite a gentle, harmless game, but he is a lucky man who has not to sweat some blood before he’s done with it.",
        author: "Ravindra Jadeja",
        category: "inspirational"
    },
    {
        text: "Cricket is my first love",
        author: "Sunil Narine",
        category: "inspirational"
    },
    {
        text: "The only good thing about that decision, Gatt, is that I will get tea before you.",
        author: "Andre Russell",
        category: "inspirational"
    },
    {
        text: "Winning isn’t everything,,,it’s the only thing.",
        author: "Shane Warne",
        category: "inspirational"
    },
    {
        text: "Science is a way of thinking much more than it is a body of knowledge.",
        author: "Carl Sagan",
        category: "science"
    },
    {
        text: "The good thing about science is that it's true whether or not you believe in it.",
        author: "Neil deGrasse Tyson",
        category: "science"
    },
    {
        text: "There is no law except the law that there is no law.",
        author: "John Archibald Wheeler",
        category: "science"
    },
    {
        text: "Falsity in intellectual action is intellectual immorality.",
        author: "Thomas Crowder Chamberlain",
        category: "science"
    }


];

const quoteElement = document.getElementById("quote");
const categorySelect = document.getElementById("category");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");


let filteredQuotes = quotes;
let currentQuoteIndex = 0;

categorySelect.addEventListener("change", filterQuotes);
prevButton.addEventListener("click", showPreviousQuote);
nextButton.addEventListener("click", showNextQuote);
randomButton.addEventListener("click", showRandomQuote);


function filterQuotes() {
    const selectedCategory = categorySelect.value;
    
    if (selectedCategory === "all") {
        filteredQuotes = quotes;
    } else {
        filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
    }

    currentQuoteIndex = 0;
    generateQuote();
}

function generateQuote() {
    if (filteredQuotes.length > 0) {
        const quote = filteredQuotes[currentQuoteIndex];
        quoteElement.textContent = `"${quote.text}" - ${quote.author}`;
    }
}

function showPreviousQuote() {
    if (filteredQuotes.length > 0) {
        currentQuoteIndex = (currentQuoteIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        generateQuote();
    }
}

function showNextQuote() {
    if (filteredQuotes.length > 0) {
        currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
        generateQuote();
    }
}

function showRandomQuote() {
    if (filteredQuotes.length > 0) {
        currentQuoteIndex = Math.floor(Math.random() * filteredQuotes.length);
        generateQuote();
    }
}

const fontSizes = [16, 18, 20, 22, 24];
// Starting with the medium font side
let currentFontSizeIndex = 1; 

const fontSizeControls = document.querySelector(".font-size-controls");
const fontSizeIncreaseButton = document.getElementById("increase");
const fontSizeDecreaseButton = document.getElementById("decrease");

fontSizeIncreaseButton.addEventListener("click", increaseFontSize);
fontSizeDecreaseButton.addEventListener("click", decreaseFontSize);

function increaseFontSize() {
    if (currentFontSizeIndex < fontSizes.length - 1) {
        currentFontSizeIndex++;
        updateFontSize();
    }
}

function decreaseFontSize() {
    if (currentFontSizeIndex > 0) {
        currentFontSizeIndex--;
        updateFontSize();
    }
}

function updateFontSize() {
    const newFontSize = fontSizes[currentFontSizeIndex];
    quoteElement.style.fontSize = newFontSize + "px";
}

const darkModeSwitch = document.getElementById("dark-mode");
const container = document.querySelector(".container");

darkModeSwitch.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
    container.classList.toggle("dark-mode");
}

// Initial setup
generateQuote();
updateFontSize();