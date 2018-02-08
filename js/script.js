// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote);
var quote;

var quotes = [
    {quote:"I'm sorry, if you were right, I'd agree with you." ,
    source: "Robin Williams",
    citation: null ,
    year: null,
    tag: "humor"},

    {quote:"Expect problems and eat them for breakfast." ,
    source: "Alfred A. Montapert",
    citation: "BrainyQuote.com" ,
    year: null,
    tag: "inspirational"},

    {quote:"Life is 10% what happens to you and 90% how you react to it." ,
    source: "Charles R. Swindoll",
    citation: "Paul: A Man of Grace and Grit (Great Lives Series)" ,
    year: "2009",
    tag: "inspirational"},

    {quote:"The secret of getting ahead is getting started." ,
    source: "Mark Twain",
    citation: null ,
    year: null,
    tag: "inspirational" },

    {quote:"To succeed in life, you need three things: a wishbone, a backbone, and a funny bone." ,
    source: "Reba McEntire",
    citation: null ,
    year: null,
    tag: "inspirational"},

    {quote:"Only the mediocre are always at their best." ,
    source: "Jean Giraudoux",
    citation: null ,
    year: null,
    tag: "humor"},

    {quote:"A woman's mind is cleaner than a man's: She changes it more often." ,
    source: "Oliver Herford",
    citation: null ,
    year: null,
    tag: "humor" }
];


//This function gets a rancom number for the index of the quote and returns a random object from the array.

function getRandomQuote(){
    return quotes[Math.floor((Math.random() * quotes.length) - 1)];
  }
//This takes the information from getRandomQuote and formats it in HTML
function printQuote(){
    quote = getRandomQuote();
    var report = '<p class="quote">' + quote.quote + '</p>'
        report += '<p class="source">'+ quote.source;
    if (quote.citation) report+= '<span class="citation">'+ quote.citation + '</span>';
    if (quote.year) report+= '<span class="year">'+ quote.year + '</span>';
        report += '</p>';
    document.getElementById('quote-box').innerHTML=report;
    document.body.style.backgroundColor = getRandomColor();//This changes the color of the background every time the quote changes
    setInterval(function(){ printQuote(); }, 30000);//This automatically changes the quote every 30 seconds
}
//This generates a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

printQuote(getRandomQuote());
