let button = document.getElementById('button');
let output = document.getElementById('output');
let quotes =
[
'"5000 years old, Varanasi is One of The Oldest Inhabited Places in the World"',
'"India houses a total of 42 World heritage sites!"',
'"The largest religion in India, Hinduism is the oldest in the world"',
'"The  Vittala temple of Hampi has 56 musical pillars which emit different notes."',
'"Sanchi Stupa is one of the oldest stone structures in Inida dating back to 3rd century BCE."',
'"Mohenjo-Daro had the worlds best channeled drainage system."',

];
button.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})