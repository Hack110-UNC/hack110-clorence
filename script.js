function edit() {
    var username = "@" + document.getElementById("username").value
    var bio = document.getElementById("bio").value

    localStorage.setItem("username", username)
    localStorage.setItem("bio", bio)

    window.location.href = "profile.html"
}

window.onload = function() {

}

function create() {
    var file = document.getElementById("file").value
    var caption = document.getElementById("caption").value

    localStorage.setItem("file", file)
    localStorage.setItem("caption", caption)

    window.location.href = "index.html"
}

window.onload = function() {
    var username = localStorage.getItem("username")
    var bio = localStorage.getItem("bio")
    var file = localStorage.getItem("file")
    var caption = localStorage.getItem("caption")

    document.getElementById("caption").innerText = caption
    document.getElementById("file").src = file
    document.getElementById("username").innerText = username
    document.getElementById("bio").innerText = bio
    
}
