const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The best time to plant a tree was twenty years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "What we fear doing most is usually what we most need to do.", author: "Tim Ferriss" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In order to carry a positive action, we must develop here a positive vision.", author: "Dalai Lama" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    document.getElementById('quote').innerText = text;
    document.getElementById('author').innerText = `— ${author}`;
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('author-search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    const results = quotes.filter(quote => quote.author.toLowerCase().includes(searchTerm));

    if (results.length > 0) {
        results.forEach(quote => {
            const p = document.createElement('p');
            p.innerText = `"${quote.text}" — ${quote.author}`;
            resultsContainer.appendChild(p);
        });
    } else {
        resultsContainer.innerHTML = '<p>No quotes found for this author.</p>';
    }
});

// Initial quote display
displayQuote();