const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6', 'Note 7', 'Note 8', 'Note 9', 'Note 10']

console.log(notes)
console.log(notes.length)
console.log(notes[1]) // grab first item on the list
console.log(notes[notes.length - 1]) // grab last item
// indexes start at zero for arrays

/* How to manipulate arrays
      - Add new item
      - remove item
      -replace existing item
** running through a series of methods on the array
*/


// Push Method  --> add something on to the end
console.log('\r\n\---------------------------------------------------- Push Method')// Blank Space
notes.push('My new Note')
console.log(notes)


// Pop Method --> remove something from the end
//notes.pop()
console.log('\r\n\---------------------------------------------------- Pop Method')// Blank Space
console.log(notes.pop())
console.log(notes)


/* 
 Two method manipulating the array from the start --> Shift & --> Unshift

 Shift Method --> removes the very first item from array
*/
console.log('\r\n\---------------------------------------------------- Shift Method')// Blank Space
console.log(notes.shift())
console.log(notes)


// Unshift Method --> add items on to the beginning of the array
console.log('\r\n\---------------------------------------------------- Unshift Method')// Blank Space
notes.unshift('Note 1','My First Notes')
console.log(notes)

