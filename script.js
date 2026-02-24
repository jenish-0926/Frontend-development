function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "jenisha" && password === "12345") {
        alert("Login Successful!");
        window.location.href = "landing.html";
    } else {
        alert("Invalid Username or Password!");
    }
}