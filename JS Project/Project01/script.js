const alertMsg = document.createElement("div");
alertMsg.innerText = "Click anywhere on White Board to see the Magic!🔥✌️"
alertMsg.classList.add("pop_up");
document.body.appendChild(alertMsg);
const btn = document.createElement("button");
btn.classList.add("btn")
btn.innerText = "Clear Screen";
const box = document.createElement("div");
const circleBackground = ["tomato", "green", "navy", "cyan", "blue", "magenta", "orange", "purple"]
box.classList.add("box");


document.body.appendChild(box);
box.addEventListener("click", (event) => {
    // Remeoving pop up msg
    // document.body.removeChild(alertMsg); This line is giving a bug and circles are not getting created in the white board. Need to findout.
    alertMsg.style.display = "none";
    const randomColor = circleBackground[Math.floor(Math.random() * circleBackground.length)]
    const circle = document.createElement("div");
    circle.classList.add("circle");
    setTimeout(() => {
        circle.style.transform = "scale(1)";
    }, 100)
    setTimeout(() => {
        circle.style.transform = "scale(0)"
    }, 5000)
    circle.style.background = randomColor;
    circle.style.left = `${event.clientX - box.getBoundingClientRect().left}px`;
    circle.style.top = `${event.clientY - box.getBoundingClientRect().top}px`;
    console.log(event.clientX, event.clientY)
    box.appendChild(circle);
    //  console.log("CLICK")
    //Adding a button
    document.body.appendChild(btn);
})
btn.addEventListener("click", () => {
    box.innerHTML = "";
})