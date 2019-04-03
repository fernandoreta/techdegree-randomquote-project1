/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
FERNANDO URIEL WERTT RETA
******************************************/

var quotes = [
  {
    "quote": "There's no place like home.",
    "source": "internet page",
    "citation": "Fernando",
    "year": 1990,
  },
  {
    "quote": "Always be you",
    "source": "wikipedia",
    "category": "Maximilian",
  },
  {
    "quote": "After you thers nothing",
    "source": "yahoo",
    "category": "YOYO",
  },
  {
    "quote": "Nothing is impossible",
    "source": "commercial",
    "category": "Adidas",
  },
  {
    "quote": "I drink and I know things",
    "source": "serie",
    "category": "GOT",
  }
];


var colors = [
    {
        background: "#ff2e63", //pink
        button: "#252a34"
    },
    {
        background: "#00adb5", //teal
        button: "#393e46"
    },
    {
        background: "#f38181", //salmon
        button: "#625772"
    },
    {
        background: "#6639a6", //purple
        button: "#521262"
    },
    {
        background: "#3f72af", //blue
        button: "#112d4e"
    },
    {
        background: "#f95959", //orange
        button: "#455d7a"
    },
    {
        background: "#a3de83", //lt green
        button: "#2eb872"
    },
    {
        background: "#118df0", //bright blue
        button: "#0e2f56"
    },
    {
        background: "#ff5722", //bright orange
        button: "#393e46"
    },
    {
        background: "#3fc1c9", //aqua
        button: "#fc5185"
    }
];
let timer;


function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

function getRandomColor() {
    let randomColor = Math.floor(Math.random() * colors.length);

    return colors[randomColor];
}


function startTimer() {
    timer = setInterval(printQuote, 10000);
}


function clearTimer() {
    clearInterval(timer);
}

function printQuote() {

    let currentQuote = getRandomQuote();
    let currentColor = getRandomColor();
    let html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }

    if ("year" in currentQuote) {
        html += "<span class='year'> " + currentQuote.year + "</span>";
    }
    if ("category" in currentQuote) {
        html += "<span class='category'> " + currentQuote.category;
    }

    html += "</span>";

    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("loadQuote").style.background = currentColor.button;


    clearTimer();
    startTimer();
}


printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
