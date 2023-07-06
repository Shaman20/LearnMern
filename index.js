const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')


app.get('/random', (req, res) => {
    const num = Math.floor(Math.random()*10)+1
    res.render('random', {rand: num})
})

app.get('/cats', (req, res) => {
    const cats = ['Rocky', 'Monite', 'Stephen', 'Spidy']
    res.render('home', {cats})
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.render('reddit', { id: subreddit })
})

app.get('/search', (req, res) => {

    const { q } = req.query
    res.send(`This is a ${q} query for cats`)
})

app.post('/cats', (req, res) => {
    res.send('This is a cats post request')
})

app.get('*', (req, res) => {
    res.send('Not found')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!!')
})