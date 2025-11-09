function edit() {
    var username = "@" + document.getElementById("username").value
    var bio = document.getElementById("bio").value

    localStorage.setItem("username", username)
    localStorage.setItem("bio", bio)

    window.location.href = "profile.html"
}

window.onload = function () {
    var username = localStorage.getItem("username")
    var bio = localStorage.getItem("bio")

    if (document.getElementById("username") && username) {
        document.getElementById("username").innerText = username
    }

    if (document.getElementById("bio") && bio) {
        document.getElementById("bio").innerText = bio
    }
}

function create() {
    var file_in = document.getElementById("file_input").files[0]
    var caption_txt = document.getElementById("caption_input").value

    var new_post = document.createElement("div");
    new_post.className = "post"

    var caption = document.createElement("p")
    caption.innerText = caption_txt
    new_post.appendChild(caption)

    var new_img = document.createElement("img")
    new_img.className = "post_img"
    new_img.src = URL.createObjectURL(file_in)
    new_post.appendChild(new_img)

    document.querySelector("main").appendChild(new_post)
}
