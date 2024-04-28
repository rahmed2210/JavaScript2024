// DOM --> Document Object Model

// Query and remove

// http://127.0.0.1:5500/notes-app/index.html


const removeOne =document.querySelector('p')  // select the first paragraph tag
// removeOne.remove()

// Query all and remove
const removeAll = document.querySelectorAll('p') // query selector all to find all paragraph tags
removeAll.forEach(function (p) {
    p.textContent = '******'  //censor all the content on the screen
   console.log(p.textContent) // property to read the value
//    p.remove()
})

