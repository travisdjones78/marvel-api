

$.get('/characters/allChars', data => {
    console.log('d1', data)
})



const stories = {
    all: '/v1/public/stories/',
    one: '/v1/public/stories/:storyId',
    chars: '/v1/public/stories/:storyId/characters',
    coms: '/v1/public/stories/:storyId/comics',
    crea: '/v1/public/stories/:storyId/creators',
    evts: '/v1/public/stories/:storyId/events',
    sers: '/v1/public/stories/:storyId/series'
}

const series = {
    all: '/v1/public/series/',
    one: '/v1/public/series/:seriesId',
    chars: '/v1/public/series/:seriesId/characters',
    coms: '/v1/public/series/:seriesId/comics',
    crea: '/v1/public/series/:seriesId/creators',
    evts: '/v1/public/series/:seriesId/events',
    stos: '/v1/public/series/:seriesId/stories'
}

const events = {
    all: '/v1/public/events/',
    one: '/v1/public/events/:eventId',
    chars: '/v1/public/events/:eventId/characters',
    coms: '/v1/public/events/:eventId/comics',
    crea: '/v1/public/events/:eventId/creators',
    sers: '/v1/public/events/:eventId/series',
    stos: '/v1/public/events/:eventId/stories'
}

const creators = {
    all: '/v1/public/creators/',
    one: '/v1/public/creators/:creatorId',
    chars: '/v1/public/creators/:creatorId/characters',
    coms: '/v1/public/creators/:creatorId/comics',
    evts: '/v1/public/creators/:creatorId/events',
    sers: '/v1/public/creators/:creatorId/series',
    stos: '/v1/public/creators/:creatorId/stories'
}

const comics = {
    all: '/v1/public/comics/',
    one: '/v1/public/comics/:comicId',
    chars: '/v1/public/comics/:comicId/characters',
    crea: '/v1/public/comics/:comicId/creators',
    evts: '/v1/public/comics/:comicId/events',
    sers: '/v1/public/comics/:comicId/series',
    stos: '/v1/public/comics/:comicId/stories'
}

const characters = {
    all: '/v1/public/characters/',
    one: '/v1/public/characters/:characterId',
    coms: '/v1/public/characters/:characterId/comics',
    crea: '/v1/public/characters/:characterId/creators',
    evts: '/v1/public/characters/:characterId/events',
    sers: '/v1/public/characters/:characterId/series',
    stos: '/v1/public/characters/:characterId/stories'
}

// const timestamp = Date.now();
// const public = '46f809385e6e2ed0d6fc6f18f988db06'
// const private = '5344a1919d47e9e519ce1f9f9fc332424d74a140'
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
if (page >1){
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
// $.get('/character/allChars', data => { characterSec(data.data.results, data) })

function characterSec(data) {
    const { previous, next, results } = data
    console.log('char',results[0].name.slice(0,2),results[19].name.slice(0,2))
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
    // console.log(Math.ceil(dataz.data.total / 100))
    // $.get('/getAllData', dataz.data, data => console.log('d2', data))
}



console.log('mane')