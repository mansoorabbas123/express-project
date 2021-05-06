const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')
const PORT = process.env.PORT || 8000;

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../template/views'));
hbs.registerPartials(path.join(__dirname, '../template/partials'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('*', (req, res) => {
    res.render('404', {
        errorMsg: "oops page not found"
    })
})


app.listen(PORT, () => console.log(`running on port ${PORT}`))