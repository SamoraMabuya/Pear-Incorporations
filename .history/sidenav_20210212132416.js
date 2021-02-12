window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.sidenav');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('elements');
        } else {
            reveals[i].classList.remove('elements');

        }
    }
}