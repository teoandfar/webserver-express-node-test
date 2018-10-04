const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// express hbs engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// // helpers
// hbs.registerHelper('getYear', () => {
//     return new Date().getFullYear();
// })
// hbs.registerHelper('capitalize', (text) => {
//     let words = text.split(' ');
//     words.forEach((word, idx) => {
//         words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });

//     return words.join(' ');
// })



app.get('/', (req, res) => {
    res.render('home', {
        name: 'TeófiLO andradE FarfÁn',
        // year: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        // year: new Date().getFullYear()
    });
})



app.get('/data', (req, res) => {
    res.send('Hello Data');

})

// app.listen(3000, () => {
app.listen(port, () => {
    console.log(`Listen requests on port ${port}`);
});

// npm run nodemon