// VIVALDI FOUR SEASONS

// Add Event Listeners
document.getElementById("spring").addEventListener("click", setSpring);
document.getElementById("summer").addEventListener("click", setSummer);
document.getElementById("autumn").addEventListener("click", setAutumn);
document.getElementById("winter").addEventListener("click", setWinter);

// Event Functions
function setSpring() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Spring";
    document.getElementById("season-title").style.color = "#1C9BD2";
    document.getElementById("season-img").src = "images/spring.jpg";
    document.getElementById("season-audio").src = "songs/vivaldi-spring.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#1C9BD2";

    // Add & Remove Classes
    document.getElementById("spring").classList.add("active");
    document.getElementById("summer").classList.remove("active");
    document.getElementById("autumn").classList.remove("active");
    document.getElementById("winter").classList.remove("active");
}

function setSummer() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Summer";
    document.getElementById("season-title").style.color = "#27A953";
    document.getElementById("season-img").src = "images/summer.jpg";
    document.getElementById("season-audio").src = "songs/vivaldi-summer.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#27A953";

    // Add & Remove Classes
    document.getElementById("spring").classList.remove("active");
    document.getElementById("summer").classList.add("active");
    document.getElementById("autumn").classList.remove("active");
    document.getElementById("winter").classList.remove("active");
}

function setAutumn() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Autumn";
    document.getElementById("season-title").style.color = "#EFB642";
    document.getElementById("season-img").src = "images/autumn.jpg";
    document.getElementById("season-audio").src = "songs/vivaldi-autumn.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#EFB642";

    // Add & Remove Classes
    document.getElementById("spring").classList.remove("active");
    document.getElementById("summer").classList.remove("active");
    document.getElementById("autumn").classList.add("active");
    document.getElementById("winter").classList.remove("active");
}

function setWinter() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Winter";
    document.getElementById("season-title").style.color = "#2367BA";
    document.getElementById("season-img").src = "images/winter.jpg";
    document.getElementById("season-audio").src = "songs/vivaldi-winter.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#2367BA";

    // Add & Remove Classes
    document.getElementById("spring").classList.remove("active");
    document.getElementById("summer").classList.remove("active");
    document.getElementById("autumn").classList.remove("active");
    document.getElementById("winter").classList.add("active");
}