// Select the elements of view1 and view2. 
const view1= document.querySelector("#view1");
const view2= document.querySelector("#view2");

// Hide the display of view1, set the display of view2 as flex.
view1.style.display= "none";
view2.style.display= "flex";

// Run the initApp() function after page got download.
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("readystate: complete");
        initApp();
    }
});

// The function that going to call after page got reload.
const initApp = () =>{
    // Select the first div and h2 where inside of the choosen div in view2.
    const view= document.querySelector("#view2");
    const div= view.querySelector("div");
    const h2= div.querySelector("h2");

    // Change the background color by click the view2.
    view.addEventListener("click",(event)=>{
        // If there is purple class remove it otherwise add it.
        view.classList.toggle("purple");
        // If there is darkblue class remove it otherwise add it.
        view.classList.toggle("darkblue");
    },false);

    // Change the background color by click the div.
    div.addEventListener("click",(event)=>{
        // If there is blue class remove it otherwise add it.
        div.classList.toggle("blue");
        // If there is black class remove it otherwise add it.
        div.classList.toggle("black");
    },false);

    // Change the content of h2 by click on it.
    h2.addEventListener("click",(event)=>{
        const myText= event.target.textContent;
        // If the current text is "My 2nd view", switch it with "Clicked!" otherwise turn back to the old version.
        myText === "My 2nd view" 
            ? event.target.textContent = "Clicked!" 
            : event.target.textContent = "My 2nd view";
    },false);

    // When mouse over on the navbar, zoom to a bit on navbar.
    const nav= document.querySelector("nav");
    nav.addEventListener("mouseover",(event)=>{
        event.target.classList.add("height100");
    });

    // When mouse out on the navbar, take back the zoom.
    nav.addEventListener("mouseout",(event)=>{
        event.target.classList.remove("height100");
    });
};

/*  
📌 **event.target**:
   - Kullanıcının etkileşime girdiği elementi döndürür.
   - Örneğin, h2'ye tıklayınca metnini değiştiriyoruz.
   - `event.target.textContent = "Clicked!"` → h2'ye tıklanınca içeriği değiştir.

📌 **classList**:
   - Elementin sınıflarını yönetmemizi sağlar.
   - Örneğin, div'in arka plan rengini değiştirmek için kullanıyoruz.
   - `div.classList.add("blue")` → "blue" sınıfını ekler.
   - `div.classList.remove("black")` → "black" sınıfını kaldırır.

📌 **toggle()**:
   - Eğer sınıf varsa kaldırır, yoksa ekler.
   - Örneğin, `classList.toggle("blue")` → Eğer "blue" sınıfı varsa kaldırır, yoksa ekler.
   - Böylece her tıklamada butonun rengini değiştiriyoruz.
*/






