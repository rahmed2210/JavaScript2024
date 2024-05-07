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

/* Local Storage global variable
// Crud
localStorage.setItem('location', 'Paterson')
// read
console.log(localStorage.getItem('location'))
// delete data
localStorage.removeItem('location')
// delete everything
localStorage.clear() */

/* 
const user = {
    name: 'rubal',
    age = 27
}
*/

//  JavaScript Object Notation -- is going to be a way for us to convert our object into a string
//   Stringify --> takes in your object or your array or what else, and it return a string so i can pass into
/*
const userJSON = JSON.stringify(user)
console.log(userJSON)
localStorage.setItem('user', userJSON) 
*/

const userJSON = localStorage.getItem('user')
const user =JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)




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

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

