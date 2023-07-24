const currLocation = window.location.href.split('?')
let page, pageSize

if (currLocation.length === 1) {
    page = 1
    pageSize = 20
} else {
    const currQueries = currLocation[1].split('&')
    page = currQueries[0].split('=')[1]
    pageSize = currQueries[1].split('=')[1]
}
if (page > 1) {
    $('#prev').on('click', e => {
        page--
        window.location.href = (`/?page=${page}&pageSize=${pageSize}`)
    })
}

$('#next').on('click', e => {
    page++
    window.location.href = (`/?page=${page}&pageSize=${pageSize}`)
})
$('#curr').on('click', () => {
    window.location.href = '/'
})

$.get(`/events/allEvents?page=${1}&pageSize=${20}`, data => eventSec(data.data))
function eventSec(data) {
    const { results } = data
    console.log(results[0])
    results.forEach((element, idx) => {
        const { comics, series, stories, creators,characters } = element
        $("#eventName").append(`
        <div class="col-2 text-center m-1" id="char">
        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt=""id="charImg" class="my-4 img-thumbnail">
        <p id="charLabel"> ${element.title}</p>
        <p>Appears in the following:</p>
        <p>${comics.available} Comics</p>
        <p>${series.available} Series</p>
        <p>${stories.available} Stories</p>
        <p>For Each Event is ${creators.available} Creators</p>
        <p>Also features over ${characters.available} different characters</p>
        <a href="/character.html?page=${1}&pageSize=${20}&character=${idx}">Read Info</a>
        </div>
        `)
    });
}



