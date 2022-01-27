const body = document.querySelector("body");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.setAttribute("style", "color: red;");
body.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue;");
body.appendChild(h3);


const div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background-color: pink;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
div.appendChild(para2);

body.appendChild(div);


//-----------------------------

const btn2 = document.querySelector('#btn2');
//btn2.onclick = () => alert("Hello World");
btn2.addEventListener('click', function (e) {
    console.log("HOLA");
    console.log(e.path[1]);
    console.log(e);
    e.target.style.background = 'blue';
});


const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello World");
});

//--------------------------

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});


