const request = require("request");
const siteUrl = `https://gateway.marvel.com/v1/public/events?ts=1689913939929&apikey=46f809385e6e2ed0d6fc6f18f988db06&hash=c472f3cda6b76b90be425220321db3aa`
const pagination = require('./mods/paginate')

const get_all_Events = async (req, res) => {
    const { query: { page, pageSize } } = req;
    let getAllData = function (callback) {
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

    let sortData = function (payLoad) {
        res.status(200).json({ success: true, data: pagination(payLoad) })
    };

    getAllData(sortData);
}

module.exports = { get_all_Events }