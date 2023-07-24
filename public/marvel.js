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

$.get(`/characters/allChars?page=${page || 1}&pageSize=${pageSize || 20}`, data => characterSec(data.data))

function characterSec(data) {
    const { previous, next, results } = data
    console.log('char', results[0].name.slice(0, 2), results[19].name.slice(0, 2))
    results.forEach((element, idx) => {
        const { comics, series, stories, events } = element
        $("#charName").append(`
        <div class="col-2 text-center m-1" id="char">
        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt=""id="charImg" class="my-4 img-thumbnail">
        <p id="charLabel"> ${element.name}</p>
        <p>Appears in the following:</p>
        <p>${comics.items.length} Comics</p>
        <p>${series.items.length} Series</p>
        <p>${stories.items.length} Stories</p>
        <p>${events.items.length} Events</p>
        <a href="/character.html?page=${page}&pageSize=${pageSize}&character=${idx}">Read Info</a>
        </div>
        `)
    });
}

$('#currPg').append('- Characters')