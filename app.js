function CheckPassword() {
    const inputText = document.getElementById("password").value
    var password = [904356];
    if (inputText.match(password)) {
        window.location = "home.html"
        return true;
    }
    else {
        alert('You have entered the wrong password. Try again.')
        return false;
    }
}