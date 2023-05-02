
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"If names are not correct, language will not be in accordance with the truth of things."`,
    person: `Confucius`
},
{
    quote: `"How vain, without the merit, is the name."`,
    person: `Homer`
},
{
    quote: `"Action without a name, a who attached to it, is meaningless."`,
    person: `Hanna Arendt`
}, {
    quote: `"A name pronounced is the recognition of the individual to whom it belongs. He who can pronounce my name aright, he can call me, and is entitled to my love and service."`,
    person: `Henry David Thoreau`
}, {
    quote: `"The glory of my name increases my shame. Less known by mortals, I could better escape their eyes."`,
    person: `Jean Racine`
}, {
    quote: `"Forgive your enemies, but never forget their names."`,
    person: `John F. Kennedy.`
},

];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})