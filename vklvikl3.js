var b;
function show_hide3()
{
if(b==1) {
    document.getElementById("butnfon").style.display="inline";
    document.getElementById("butnfon2").style.display="inline";
    return b=0;
}
else{
    document.getElementById("butnfon").style.display="none";
    document.getElementById("butnfon2").style.display="none";
    return b=1;
}
}

