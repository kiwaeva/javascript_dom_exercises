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