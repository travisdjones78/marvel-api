const request = require("request");
const siteUrl = `https://gateway.marvel.com/v1/public/characters?ts=1689913939929&apikey=46f809385e6e2ed0d6fc6f18f988db06&hash=c472f3cda6b76b90be425220321db3aa`
const convert = require('./mods/urlConvert')
const { calculateLimitAndOffset, paginate } = require('paginate-info');

const get_all_Characters = async (req, res) => {
    // fetch(siteUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         try {
    //             const result = data.data.results
    //             const { query: { page, pageSize } } = req;
    //             // const { limit, offset } = calculateLimitAndOffset(page, pageSize);
    //             // const count = data.data.total;
    //             // // const paginatedData = result.slice(offset, offset + limit);
    //             // const paginatedData = result.slice(offset, offset * limit);
    //             // const paginationInfo = paginate(page, count, paginatedData);
    //             return res.status(200).json({
    //                 success: true,
    //                 // data: { meta: paginationInfo, limit, offset, result: paginatedData }
    //                 result,page,pageSize
    //             });
    //             // res.status(200).json({ msg: 'yeah dawg!', paginationInfo })
    //             // console.log(paginationInfo)
    //         } catch (error) {
    //             res.status(500).json({ err: error.message })
    //             console.log(error.message)
    //         }
    //     })
    const working ={}
    request(siteUrl, (err, response, body) => {
        convert(JSON.parse(body))
        working.man=false
    })
    request(siteUrl, (err, response, body) => {
        convert(JSON.parse(body))
        working.woman=false
        res.status(200).json({ success: true,working })
    })
    // res.status(200).json({ success: true,working, body:JSON.parse(body) })
}

const test = async (req, res) => {
    try {
        console.log('a')
        res.status(200).json({ msg: 'aye' })
    } catch (error) {
        res.status(500).json({ err: error.message })
        // console.error(message)
    }
}
module.exports = {
    get_all_Characters,
    test
}
