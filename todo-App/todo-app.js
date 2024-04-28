//-->  live-server todo-app
//-->  http://127.0.0.1:5500/todo-app/index.html   

/*
// remove all p tag that contain "the" in the text
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraphs) {
    if (paragraphs.textContent.includes('the')) {
        paragraphs.remove()
    }
})
*/


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

// filter how many todos left (p element)
const incompleteTodo = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incompleteTodo.length} todos left`
document.querySelector('body').appendChild(summary)


// add a p for each todo above (use text value)
todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

