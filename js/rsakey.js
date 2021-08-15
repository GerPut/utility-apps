const generate = document.querySelector(".generate-btn")
let display = document.querySelector(".display")
const copybutton = document.querySelector(".copy-btn")

copybutton.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const ibannumber = display.innerText


    if (!ibannumber) {
        return
    }

    textarea.value = ibannumber
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    alert("Your RSA Key was successfully copied")
})


generate.addEventListener('click', makeiban)

function makeiban() {
    var iban = "";
    var possible = "A0B1C2D3E4F5G6H7I8J9KLMNOPQRSTUVWXYZ1234567890";

    for (var i = 0; i < 20; i++)
        iban += possible.charAt(Math.floor(Math.random() * possible.length));

    display.innerText = iban;
}