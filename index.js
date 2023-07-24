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

app.use(express.static(path.join(__dirname, 'public')))


const characters = require('./route_2/characters')
app.use((req, res, next) => {
    const { method, url } = req;
    console.log('|Server Log **|=>'.red, `Method: ${method} URL: ${url}`.green);
    next()
});

app.use('/characters',characters)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
// app.get('/characters/test', function (req, res) {
//     res.send('bow')
//     // console.log('whoa')
// });
const running = 'Server is running on Port'
app.listen(PORT, (err) => {
    console.log(running.white.bold.bgBlack, `${PORT}`.red.bgBlack, '\n',
        `http://localhost:${PORT} is Live!`.magenta.bgBlack);
        
});

// app.get('/getAllData', (req, res) => {
//     // const { query: { currentPage, pageSize } } = req;
//     // const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
//     // const count = data.length;
//     // const paginatedData = data.slice(offset, offset + limit);
//     // const paginationInfo = paginate(currentPage, count, paginatedData);

//     // return res.status(200).json({
//     //     success: true,
//     //     data: { result: paginatedData, meta: paginationInfo }
//     // });
//     console.log('here',req.data.data)
// })

// app.use((req,res,next) => {
//   console.log(`${req.method} >>> ${req.url}`),
//   next()
// })



