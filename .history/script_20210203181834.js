const navmenu = document.getElementById("Navmenu");

const links = navmenu.getElementsByClassName('nav-link');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


const track = document.querySelector('.track');
const box = Array.from(track.children);

const bottom_indicators = document.querySelector('.bottom-nav');
const bulletSelector = Array.from(bottom_indicators.children);