const request = require("request");
const pagination = require('./paginate')
const siteUrl = `https://gateway.marvel.com/v1/public/characters?ts=1689913939929&apikey=46f809385e6e2ed0d6fc6f18f988db06&hash=c472f3cda6b76b90be425220321db3aa`

function convertUrl(page, pageSize) {

    var grabFirstPage = function (callback) {
        if (parseInt(page) === 1) {
            request(siteUrl, (err, response, body) => {
                const { offset, limit, count, results, total } = JSON.parse(body).data
               return callback({ offset, limit, count, total, page, results });
            })
        }

        if (parseInt(page) > 1) {
            request(`${siteUrl}&offset=${page * pageSize}`, (err, response, body) => {
                const { offset, limit, count, results, total } = JSON.parse(body).data
              return  callback({ offset, limit, count, total, page, results });
            })
        }
    };

    var grabRest = function (payLoad) {
        return pagination(payLoad)
    };

    return grabFirstPage(grabRest)
}

module.exports = convertUrl
