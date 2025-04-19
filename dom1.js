const button = document.getElementById("changetext");
const heading = document.getElementById("main-heading");

let toggled = false;

button.addEventListener("click", () => {
    if (!toggled) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.style.backgroundColor = "#444";
        button.style.color = "white";
        heading.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.style.backgroundColor = "#f0f0f0";
        button.style.color = "black";
        heading.style.color = "black";
    }
    toggled = !toggled;
});
