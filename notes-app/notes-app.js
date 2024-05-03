const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

// render notes function -- takes all of the notes and filters and it figures out which one matches the filters
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // to clear that div entirely when adding new note
    document.querySelector('#notes').innerHTML = ''
    
    // add filtering notes
    filteredNotes.forEach(function (note) {
        const noteE1 =document.createElement('p')
        noteE1.textContent = note.title
        document.querySelector('#notes').appendChild(noteE1)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

// input event is going to fire on every single character changes
//     --using input event with our text based inputs, allowing us to access that latest information
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function (e) {
    // cancel the default behavior of the form --tell browser not to refresh and not add anything in url
    e.preventDefault()
    // access to data and printing to console
   console.log(e.target.elements.firstName.value)
   // clearing the form field (printing the name than wiping the data)
   e.target.elements.firstName.value = ''
})
