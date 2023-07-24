const currLocation = window.location.href.split('?')
const currQueries = currLocation[1].split('&')
let page = currQueries[0].split('=')[1]
const pageSize = currQueries[1].split('=')[1]
let eventNum = currQueries[2].split('=')[1]
$.get(`/events/allEvents?page=${page}&pageSize=${pageSize}`, data => getCharacterInfo(data.data))

function getCharacterInfo(data) {
    const eventInfo = data.results[eventNum]
    console.log(eventInfo)
    const { characters, stories, comics, series, title, description, creators } = eventInfo
    $('#event').append(`
    <p id="eventTitle"> ${title}</p>
    <p>${description}</p>
    <p>Appears in the following:</p>
    <p>${comics.available} Comics</p>
    <p>${series.available} Series</p>
    <p>${stories.available} Stories</p>
    <p>${characters.available} Events</p>
    <p>${creators.available}</p>
     `)
    $('#eventInfoImg').attr('src', `${eventInfo.thumbnail.path}.${eventInfo.thumbnail.extension}`)
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