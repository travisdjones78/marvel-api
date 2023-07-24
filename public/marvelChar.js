const currLocation = window.location.href.split('?')
const currQueries = currLocation[1].split('&')
let page = currQueries[0].split('=')[1]
const pageSize = currQueries[1].split('=')[1]
let character = currQueries[2].split('=')[1]
$.get(`/characters/allChars?page=${page}&pageSize=${pageSize}`, data => getCharacterInfo(data.data))

function getCharacterInfo(data) {
    const characterInfo = data.results[character]
    const {events,stories,comics,series}=characterInfo
    $('#user').append(`
    <p id="charProf"> ${characterInfo.name}</p>
    <p>Appears in the following:</p>
    <p>${comics.items.length} Comics</p>
    <p>${series.items.length} Series</p>
    <p>${stories.items.length} Stories</p>
    <p>${events.items.length} Events</p>
    `)
    $('#charProfImg').attr('src',`${characterInfo. thumbnail.path}.${characterInfo.thumbnail.extension}`)
}

$('#curr').on('click', () => {
    window.location.href = '/'
})

$('#prev').on('click', e => {
    page--
    window.location.href = (`/characters.html`)
})


$('#next').on('click', e => {
page++
window.location.href = (`/events.html`)
})
