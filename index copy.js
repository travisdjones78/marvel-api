require('colors')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4080
const path = require('path')

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use((req,res,next) => {
  console.log(`${req.method} >>> ${req.url}`),
  next()
})
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const characters = require('./route_2/characters')


app.get('/getAllData', (req, res) => {
    // const { query: { currentPage, pageSize } } = req;
    // const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    // const count = data.length;
    // const paginatedData = data.slice(offset, offset + limit);
    // const paginationInfo = paginate(currentPage, count, paginatedData);

    // return res.status(200).json({
    //     success: true,
    //     data: { result: paginatedData, meta: paginationInfo }
    // });
    console.log('here',req.data.data)
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${4080}`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});


app.use((req, res, next) => {
    const { method, url } = req;
    console.log('|Server Log **|=>'.red, `Method: ${method} URL: ${url}`.green);
    // next()
});

app.use('/characters',characters)
const running = 'Server is running on Port'
app.listen(PORT, (err) => {
    console.log(running.white.bold.bgBlack, `${PORT}`.red.bgBlack, '\n',
        `http://localhost:${PORT} is Live!`.magenta.bgBlack);
        
});
