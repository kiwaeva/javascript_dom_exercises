const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the text-content created in DOM!";

container.appendChild(content);


const text = document.createElement("p");
text.textContent = "Hey I'm red!"
text.style.color = "red";

container.appendChild(text);


const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!"
blueHeader.style.color = "blue";

container.appendChild(blueHeader);

const div = document.createElement("div")
// div.innerHTML = "<h1>I'm in a div</h1> <p>Me too!</p>"
const heading = document.createElement("h1");
heading.textContent= "I'm in div";

const paragraph = document.createElement("p");
paragraph.textContent = "Me too!";

div.appendChild(heading);
div.appendChild(paragraph);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const bttn = document.querySelector('#bttn');
bttn.addEventListener("click", () => {
    alert("Hello World")
});

function alertFunction () {
    alert("Yay! that's an Alert function in action!");
}

// method 2
const button = document.querySelector('#button');
button.onclick = alertFunction;

// method 3
const button2= document.querySelector("#button2")
button2.addEventListener("click", alertFunction);

// We can access more information about the event by passing a parameter to the function that we are calling:

// Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed.
btn.addEventListener("click", function (e) {
  console.log(e);
});

// or information about the event’s target - the DOM node that was clicked.
btn.addEventListener("click", function (e) {
  console.log(e.target);
});

// In this example, we are setting a random background color on the button, not the page.
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  e.target.style.color = "white";
});

