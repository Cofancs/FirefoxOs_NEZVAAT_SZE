var href= window.content.location.href.substring( window.location.href.lastIndexOf( '-' ));
console.log(href);
var walesi=document.getElementById("walesi");
var anyam=document.getElementById("anyam");
var tiszai=document.getElementById("tiszai");
var title = document.getElementById("title");
var author = document.getElementById("author");
if(href == "-walesi"){
    title.textContent="A walesi bárdok";
    author.textContent="Arany János";
    walesi.hidden=false;
    anyam.hidden=true;
    tiszai.hidden=true;
}else if(href == "-anyam"){
        title.textContent="Anyám tyúkja";
    author.textContent="Petőfi Sándor";
    walesi.hidden=true;
    anyam.hidden=false;
tiszai.hidden=true;
}else if(href == "-tiszai"){
        title.textContent="Tiszai Csönd";
    author.textContent="Juhász Gyula";
    walesi.hidden=true;
    anyam.hidden=true;
    tiszai.hidden=false;
}
