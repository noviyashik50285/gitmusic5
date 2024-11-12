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

