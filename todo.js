
let button = document.querySelector("#button");
let search = document.querySelector("#search");
let list = document.querySelector(".list-area");
let li = document.createElement("li");
let span = document.createElement("span");



button.addEventListener("click", () => {
    if (search.value === '') {
        alert("Pls Add any Task")
    } else {
        let list = document.querySelector(".list-area");
        let li = document.createElement("li");

        li.innerText = search.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }


    search.value = ''
    save();


});

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cheked")
        e.target.classList.toggle("line")

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function save() {
    localStorage.setItem("data", list.innerHTML)
}
function show() {
    list.innerHTML = localStorage.getItem("data")
}
show()