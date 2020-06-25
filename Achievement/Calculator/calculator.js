function inp(v)
{
    var x=document.getElementById("screen");
    var p=x.innerHTML
    if(p=="0"){x.innerHTML=v}
    else
    x.innerHTML=p+v;
}
function clean()
{
    var x=document.getElementById("screen")
    x.innerHTML=0
}
function calc()
{
    var x=document.getElementById("screen")
    var a=x.innerHTML 
    var w=eval(a);
    x.innerHTML=w;
}

function sym(a)
{
    var x=document.getElementById("screen")
    var p=x.innerHTML
    var t;
    if(a==1)t="+"
    if(a==2)t="-"
    if(a==3)t="*"
    if(a==4)t="/"
    if(a==5)t="."
    if((a==6)||(a==7))
    {
        if(a==6)t="("
        else t=")"
    }
    x.innerHTML=p+t
}
function bksp()
{
    var x=document.getElementById("screen")
    var p=x.innerHTML;
    var l=p.length;
    a=p.substr(0,l-1);
    x.innerHTML=a;
}
