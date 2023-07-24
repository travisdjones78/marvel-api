const pagination = (data) => {
    const { limit, count, total, page, results, offset } = data
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const roundedPages = total / limit
    const hasRemainder = (total / limit) > .0
    let totalCnt = ''
    let newResults = {}

    if (endIndex < total) {
        newResults.next = {
            page: page,
            limit: limit
        }
    }

    if (startIndex > 0) {
        newResults.previous = {
            page: page - 1,
            limit: limit
        }
    }

    if (hasRemainder) {
        totalCnt = Math.ceil(total / limit)
    } else {
        totalCnt = roundedPages
    }

    newResults.results = results
    newResults = { total, offset, pageCount: totalCnt, ...newResults }
    return newResults
}

module.exports = pagination