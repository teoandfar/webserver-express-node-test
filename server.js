const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        name: 'Teófilo Andrade Farfán',
        year: new Date().getFullYear()
    });
})


// app.get('/', (req, res) => {
//     let salida = {
//         name: 'Teo',
//         age: 30,
//         url: req.url
//     }

//     res.send(salida);
// })


app.get('/data', (req, res) => {
    res.send('Hello Data');

})

app.listen(3000, () => {
    console.log('Listen requests on port 3000');
});