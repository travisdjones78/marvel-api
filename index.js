require('colors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4080
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const characters = require('./route/characters')
const events = require('./route/events')
app.use((req, res, next) => {
    const { method, url } = req;
    console.log('|Server Log **|=>'.red, `Method: ${method} URL: ${url}`.green);
    next()
});

app.use('/characters', characters)
app.use('/events', events)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const running = 'Server is running on Port'
app.listen(PORT, (err) => {
    console.log(running.white.bold.bgBlack, `${PORT}`.red.bgBlack, '\n',
        `http://localhost:${PORT} is Live!`.magenta.bgBlack);

});





