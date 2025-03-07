// Web Storage API 

// Not part of the DOM - refers to the window API.
// Avaiable to JS via the global variable: window.

// We do not have to type window.

// These two are exactly the same.
/* window.alert("ok!")
alert("ok!"); */

// These two are exactly same as well.
/* window.alert(window.location);
alert(location); */

// Let's create two variables to demonstrate how we can use them in Web Storage.
const myArray= ["eat","sleep","code"];
const myObject= {
    name: "Efe Alp",
    hobbies: ["eat","sleep","code"],
    logName: function(){
        console.log(this.name);
    }
}

/* 
Session Storage: 
- Data is only stored during the session.
- If the user closes the browser tab, the data is removed. 
- Example: Temporary user settings, from drafts, etc.
*/

/* 
Local Storage: 
- Data is stored persistently, even after closing the browser.
- When the user revisits the website, the data is still avaible.
- Example: User preferences, dark mode settings, etc.
*/

// Storing data in Local Storage (Data is persistent)
localStorage.setItem("myLocalStore",JSON.stringify(myArray));

// Retrieving the first key in Local Storage.
const key= localStorage.key(0);

//Retrieving data from Local Storage and converting it back to an array
const myLocalData= JSON.parse(localStorage.getItem("myLocalStore"));

console.log(key);

/*
📌 **Important Notes:**
   - `sessionStorage` and `localStorage` **only store strings**.
   - If you store an object or array, **it must be converted to a string** using `JSON.stringify()`.
   - To retrieve and use the stored data, **convert it back** using `JSON.parse()`.
   - `localStorage.setItem(key, value)` → Stores a value.
   - `localStorage.getItem(key)` → Retrieves a value.
   - `localStorage.removeItem(key)` → Removes a specific key.
   - `localStorage.clear()` → Clears all stored data.
   - `localStorage.key(index)` → Returns the key name at a specific index.
   - `localStorage.length` → Returns the number of stored items.
*/

