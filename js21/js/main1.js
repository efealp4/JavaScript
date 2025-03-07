// Select the elements of view1 and view2 using unique methods.
const view1 = document.getElementById("view1");
const view2 = document.querySelector("#view2");

// Select all elements with the class "view".
const views = document.getElementsByClassName("view");
const sameViews = document.querySelectorAll(".view");

// Print the selected elements to the console.
console.log(view1);
console.log(view2);
console.log(views);
console.log(sameViews);

// Set the display for view1 and view2 to flex mode.
view1.style.display = "flex";
view2.style.display = "flex";

// Select all div elements inside view1.
const divs = view1.querySelectorAll("div");
const sameDivs = view1.getElementsByTagName("div");

// Print the div elements to the console.
console.log(divs);
console.log(sameDivs);

// Select all even divs inside view1 and style them.
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue"; // Change background color
    evenDivs[i].style.color = "orange"; // Change text color
    evenDivs[i].style.fontSize = "1.5rem"; // Change font size
}

// Select the h1 tag inside the navbar and change its content.
const navText = document.querySelector("nav h1");
navText.textContent = "Hello mf!";

// Add new HTML content inside the navbar.
const navBar = document.querySelector("nav");
navBar.innerHTML = "<h1>Hello mf!</h1> <p>This should align right.</p>";

// Adjust navbar alignment.
navBar.style.display = "flex";
navBar.style.justifyContent = "space-evenly";
navBar.style.alignItems = "center";

// Print relationships of the selected evenDivs to the console.
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousElementSibling);

// Clear all elements inside view2.
view2.innerHTML = "";

// Function to create new divs with their count numbers.
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div"); // Create a new div.
    newDiv.textContent = iter; // Set the iter as content.
    newDiv.style.backgroundColor = "orange"; // Background color
    newDiv.style.width = "100px"; // Set width
    newDiv.style.height = "100px"; // Set height
    newDiv.style.margin = "10px"; // Margin for spacing
    newDiv.style.display = "flex"; // Make it a flex container
    newDiv.style.justifyContent = "center"; // Center horizontally
    newDiv.style.alignItems = "center"; // Center vertically
    newDiv.style.borderRadius = "10px"; // Make it look better
    parent.appendChild(newDiv); // Append the div to the parent element.
};

// Append new divs inside view2.
for (let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}
