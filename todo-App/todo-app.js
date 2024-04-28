/* create a new HTML file
1 - an h1 and 5 p tag
2 - server that folder and view the doc in the browser
3 - create a link a javaScript file to html
4 - remove all p tag that contain "the" in the text
-->  live-server todo-app
-->  http://127.0.0.1:5500/todo-app/index.html   */



// remove all p tag that contain "the" in the text
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraphs) {
    if (paragraphs.textContent.includes('the')) {
        paragraphs.remove()
    }
})