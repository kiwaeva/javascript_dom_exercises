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
