/*
// DOM --> Document Object Model

// Query and remove

// http://127.0.0.1:5500/notes-app/index.html
*/

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



const removeOne =document.querySelector('p')  // select the first paragraph tag
// removeOne.remove()

// Query all and remove
const removeAll = document.querySelectorAll('p') // query selector all to find all paragraph tags
removeAll.forEach(function (p) {
    p.textContent = '******'  //censor all the content on the screen
//   console.log(p.textContent) // property to read the value
//    p.remove()
})

// add new element ---> 
/*        create element allows us to create a new element, is not actually going to put it anywhere 
          in the visible HTML, it just going to give us a reference 
*/
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)