let myList = []

const addBtn = document.querySelector("#addNew");
const output = document.querySelector(".output");
const newItem = document.querySelector("#addItem");

addBtn.addEventListener('click', function () {
    if (newItem.value);
    myList.push(newItem.value);
    build();
    newItem.value = ""
})
window.onload = build;

function build() {
    output.innerHTML = ""
    const table = document.createElement("table")
    for (let i = 0; i < myList.length; i++) {
        const row = document.createElement("tr");
        row.index = i;
        const cell1 = document.createElement("td");
        cell1.innerHTML = myList[i];
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click", function () {
            let itemOut = myList.splice(i, 1);
            build();
        })
        cell2.appendChild(span1)
        const span2 = document.createElement("span")
        span2.innerText = "Edit"
        span2.addEventListener("click", function () {
            row.style.backgroundColor = "yellow";
            let tempElement = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempElement.innerText;
            newInput.focus();
            tempElement.innerHTML = "";
            tempElement.appendChild(newInput);
            newInput.addEventListener("blur", function () {
                tempElement.innerHTML = newInput.value;
                row.style.backgroundColor = "transparent";
                myList[i] = newInput.value;
            })
        })
        cell2.appendChild(span2);
        row.appendChild(cell2);
        table.appendChild(row);
    }
    console.log(table)
    output.appendChild(table);
}