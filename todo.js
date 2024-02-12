
let button = document.querySelector("#button");
let search = document.querySelector("#search");
button.addEventListener("click", () => {
    if (search.value === '') {
        alert("Pls Add any Task")
    } else {
        let list = document.querySelector(".list-area");
        let li = document.createElement("li");

        li.innerText = search.value;
        list.appendChild(li)

    }
});


