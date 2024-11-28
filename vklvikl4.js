const makefon = document.getElementById("makefon");
const containerop = document.getElementById("containerop");
makefon.addEventListener('click', function() {
    if (containerop.style.backgroundColor == 'green') {
        containerop.style.backgroundColor = null;
    } else {
        containerop.style.backgroundColor = 'green';
    }
});

