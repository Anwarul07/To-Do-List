
let button = document.querySelector("#button");
let search = document.querySelector("#search");
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
        li.appendChild(span)

        li.addEventListener("click", () => {
            li.classList.toggle("line");
            li.classList.toggle("cheked");
        })

        span.addEventListener("click", () => {
            list.removeChild(li)
        })


    }
    search.value = ''
    
});


