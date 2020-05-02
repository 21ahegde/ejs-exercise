const express = require('express'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.get('/ping', function(req, res) {
    res.send('pong'); 
}); 

app.get('/feedback', function(req, res) {
    res.render('feedback', {
        pageTitle: 'Coca Cola', 
        pageID: 'Home',
        aNumber: 123456789
    })
})

// Hello World

app.get('/HelloWorld', function (req, res) {
    res.render('HelloWorld', {
        pageTitle: 'Hello World'
    })
})

// Meow

app.get('/Cats', function (req, res) {
    res.render('Cats', {
        pageTitle: 'Meow'
    })
})

// Woof

app.get('/Dogs', function (req, res) {
    res.render('Dogs', {
        pageTitle: 'Woof'
    })
})

// Living Together

app.get('/Cats_and_Dogs', function (req, res) {
    res.render('Cats_and_Dogs', {
        pageTitle: 'Living Together'
    })
})

// Names

app.get('/Greet/:name', function (req, res) {
    var name = req.params.name; 
    res.render('Greet', {
        pageTitle: 'Hello, ' + ' ' + `${name}` + ' ' + '!'
    })
})

// Year you were born

app.get('/year/:age', function (req, res) {
    var num = req.params.age;
    var birthyear = 2020 - num; 
    res.render('year', {
        pageTitle: 'Hello, you were born in' + ' ' + `${birthyear}`
    })
})


app.listen ('3000', function() {
    console.log('I totally know what I am doing'); 
}); 