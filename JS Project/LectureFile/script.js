const list = `
        <li>Akshay</li>
        <li>Aditi</li>
        <li>Darshan</li>
        <li>KAran</li>`
    ;
const unorderedList = document.querySelector("ul")

unorderedList.innerHTML = list;

// create element on screen
let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "50px";
title.style.color = "green";
title.textContent = "Hello this is JS DOM learning..!"

console.log(title)
document.body.appendChild(title);

let title2 = document.createElement("h2");
title2.className = "title2";
title2.style.fontSize = "50px";
title2.style.color = "red";
title2.textContent = "Hello this is JS DOM learning..! to REMOVE"

console.log(title2)

document.body.appendChild(title2);
