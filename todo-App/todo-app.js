//-->  live-server todo-app
//-->  http://127.0.0.1:5500/todo-app/index.html   



const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


// Create Filter
const filters = {
    searchText: '',
    hideCompleted: false
}


// Render Todos
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted ||!todo.completed

        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}


renderTodos(todos, filters)




// setup event listener
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


//  setup an submit handler and cancel the default action
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
//    Add a new item to the todos array with that text data (completed value of false)
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    //  Rerender the application
    renderTodos(todos, filters) 
    //  clear input field value
    e.target.elements.text.value = '' // blank mean to clear the field
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {   
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})



//  1.  Create a checkbox and setup event listen --> hide completed
//  2.  create new hidecompleted filter (default false)
//  3.  update hideCompleted an rerender list on checkbox changes
//  4.  setup renderTodos to remove completed item

