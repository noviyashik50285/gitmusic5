//document.getElementById("knopa").style.display="none";
var a;
function show_hide()
{
if(a==1) {
    document.getElementById("containerop").style.display="inline";
    return a=0;
}
else{
    document.getElementById("containerop").style.display="none";
    return a=1;
}
}

var b;
function show_hide2()
{
if(b==1) {
    document.getElementById("container").style.display="inline";
    return b=0;
}
else{
    document.getElementById("container").style.display="none";
    return b=1;
}
}

var k;
function show_hide3()
{
if(k==1) {
    document.getElementById("butnfon").style.display="inline";
    document.getElementById("butnfon2").style.display="inline";
    return k=0;
}
else{
    document.getElementById("butnfon").style.display="none";
    document.getElementById("butnfon2").style.display="none";
    return k=1;
}
}

const makefon = document.getElementById("makefon");
const containerop = document.getElementById("containerop");
makefon.addEventListener('click', function() {
    if (containerop.style.backgroundColor == 'green') {
        containerop.style.backgroundColor = null;
    } else {
        containerop.style.backgroundColor = 'green';
    }
});

var vse;
function show_hide5()
{
if(vse==1) {
    document.getElementById("victor1").style.display="inline";
    return vse=0;
}
else{
    document.getElementById("victor1").style.display="none";
    return vse=1;
}
}


