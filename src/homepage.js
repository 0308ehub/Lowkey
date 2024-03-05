// there is like legit nothing here cause I still need to figure out alot of the java

var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsmenu.classList.toggle(".settings-menu-height");
}

document.getElementById("profileImage").addEventListener("click", function() {
    window.location.href = "profile.html";
});
