const { calculateLimitAndOffset, paginate } = require('paginate-info');
// const data = require('./data.js')

fetch(`https://gateway.marvel.com/v1/public/characters?ts=1689913939929&apikey=46f809385e6e2ed0d6fc6f18f988db06&hash=c472f3cda6b76b90be425220321db3aa`)
//  fetch(`https://gateway.marvel.com/v1/public/characters?ts=${process.env.MARVEL_TIMESTAMP}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${process.env.MARVEL_HASH}aa&limit=100&offset=0`)
            .then(response => response.json())
            .then(data => {}
            
            )

const getAllData = (req, res) => {
    const { query: { currentPage, pageSize } } = req;
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    const count = data.length;
    const paginatedData = data.slice(offset, offset + limit);
    const paginationInfo = paginate(currentPage, count, paginatedData);

    return res.status(200).json({
        success: true,
        data: { result: paginatedData, meta: paginationInfo }
    });
}

// const tasks = await Task.find({}).limit(pageSize).skip(pageSize * page);;

// $.get(`https://gateway.marvel.com/v1/public/characters?ts=${process.env.MARVEL_TIMESTAMP}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${process.env.MARVEL_HASH}aa&limit=100&offset=0`, data => { characterSec(data) })

function characterSec(data) {
    console.log('d', data)
}

