let name = ' Rubal Ahmed '

//  property on our string called length --> it return the length of the string as a number

//  Length Property 
console.log(name.length)

//  Convert all of the characters in String to UpperCase
console.log(name.toUpperCase())

//  Convert to Lower Case
console.log(name.toLowerCase())


/*   <-- INCLUDES METHOD -->
   --> A String to be searched for within this string
   --> Optional, The position within the string at which to began searching for (((  searchString  )))

   --> Return Value
        true  --> if the search string is found anywhere within the given string. otherwise, false if not
*/
let password = 'abc123password098'
console.log(password.includes('password'))


/* 
    TRIM METHOD  
--> allows us to remove extra whitespace from a string
- useful when it comes to sanitizing data that users enter
*/ 
console.log(name.trim())


