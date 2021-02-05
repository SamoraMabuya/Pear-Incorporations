console.log('hello');
const navmenu = document.getElementById("Navmenu");

const links = navmenu.getElementsByClassName('nav-link');
const track = document.querySelector('.track');
const slides = Array.from(track.children);

const bottom_indicators = document.querySelector('.bottom-nav');
const bulletSelector = Array.from(bottom_indicators.children);

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}




const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = function(slide, index) {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = function(track, activeSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    activeSlide.classList.remove('active-slide');
    targetSlide.classList.add('active-slide');
}

const updateDots = function(activeDot, targetDot) {
        activeDot.classList.remove('active-slide');
        targetDot.classList.add('active-slide');

    }
    // jump to any slide slide with indicator
bottom_indicators.addEventListener('click', function(e) {

    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const activeSlide = track.querySelector('.active-slide');
    const activeDot = bottom_indicators.querySelector('.active-slide');
    const targetIndex = bulletSelector.findIndex(bulletSelect => bulletSelect === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, activeSlide, targetSlide);
    updateDots(activeDot, targetDot);
});