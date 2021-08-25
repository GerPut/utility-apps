let myList = ["bread", "lemons", "sugar", "cookies", "spices"]

const addBtn = document.querySelector("#addNew");
addBtn.addEventListener('click', function () {
    console.log("clicked")
})
window.onload = build

function build() {
    const table = document.createElement("table")
    for (let i = 0; i < myList.length; i++) {
        const row = document.createElement("tr");
        row.index = i;
        const cell1 = document.createElement("td");
        cell1.innerHTML = myList[i]
        row.appendChild(cell1)
        const cell2 = document.createElement("td");

        table.appendChild(row)
    }
    console.log(table)
}