


let btn1 = document.getElementsByTagName("button")[0];
let btn2 = document.getElementsByTagName("button")[1];
let btn3 = document.getElementsByTagName("button")[2];
let btn4 = document.getElementsByTagName("button")[3];

let cont2 = document.getElementsByTagName("div")[1];

let foto = document.getElementsByClassName("foto");


btn1.onclick = accion1;
btn2.onclick = accion2;
btn3.onclick = accion3;
btn4.onclick = accion4;

function accion1 (){
   cont2.innerHTML="hola mundo";
}

function accion2 (){
    cont2.innerHTML='<img src="pexels.jpg" >';
    
}

function accion3 (){
    cont2.insertAdjacentElement("beforeend" ,"<button>click</button>");
}

function accion4 (){
    cont2.innerHTML="";
}