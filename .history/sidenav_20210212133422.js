window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelector('.sidenav');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('element');
        } else {
            reveals[i].classList.remove('element');

        }
    }
}