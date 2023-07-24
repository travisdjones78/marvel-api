const request = require("request");
const siteUrl = `https://gateway.marvel.com/v1/public/characters?ts=1689913939929&apikey=46f809385e6e2ed0d6fc6f18f988db06&hash=c472f3cda6b76b90be425220321db3aa`
const convert = require('./mods/urlConvert')
const pagination = require('./mods/paginate')
const { calculateLimitAndOffset, paginate } = require('paginate-info');

const get_all_Characters = async (req, res) => {
    const { query: { page, pageSize } } = req;
    var payLoad = {}

    // console.log(req.query)
    // if (parseInt(page) === 1) {
    //     payLoad = {}
    //     request(siteUrl, (err, response, body) => {
    //         payLoad.results = JSON.parse(body).data.results
    //         convert(JSON.parse(body))
    //         // res.status(200).json({ success: true, payLoad })
    //     })
    // }

    // if (parseInt(page) > 1) {
    //     payLoad = {}
    //     request(`${siteUrl}&offset=${page * pageSize}`, (err, response, body) => {
    //         payLoad.results = JSON.parse(body).data.results
    //         // res.status(200).json({ success: true, payLoad })
    //     })

    //     console.log(payLoad)
    // }
    var getUserName = function (callback) {
        if (parseInt(page) === 1) {
            request(siteUrl, (err, response, body) => {
                const { offset, limit, count, results, total } = JSON.parse(body).data
                callback({ offset, limit, count, total, page, results });
            })
            return
        }

        if (parseInt(page) > 1) {
            request(`${siteUrl}&offset=${page * pageSize}`, (err, response, body) => {
                const { offset, limit, count, results, total } = JSON.parse(body).data
                callback({ offset, limit, count, total, page, results });
            })
            return
        }
    };

    var saveUserInDatabase = function (payLoad) {
    //   console.log('data',)  
      const newPayLoad=pagination(payLoad)
        res.status(200).json({ success: true, data:pagination(payLoad)})
    };

    const charArr = getUserName(saveUserInDatabase); // User: Foo is saved successfully.
    // console.log(charArr)
    let outsideVariable;

    // .then(() => {
    //     console.log('in', outsideVariable); // value of outsideVariable is now available
    // });
    // console.log('out', outsideVariable); // value of outsideVariable is now available
    // request(`${siteUrl}&offset=${page * pageSize}`, (err, response, body) => {

    //     payLoad.result = convert(JSON.parse(body), page, pageSize)
    //     // res.status(200).json({ success: true, working:''})
    //     res.status(200).json({ success: true,payLoad:payLoad.msg, body: JSON.parse(body).data.results })
    //     res.status(200).json({ success: true,payLoad:payLoad.msg, body: JSON.parse(body).data.results })
    // })
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
