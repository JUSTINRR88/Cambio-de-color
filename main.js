let txt_saludo = document.querySelector(".saludo");
let btn_saludo2 = document.querySelector(".rojo");
let btn_saludo3 = document.querySelector(".azul");

function cambiar_dato(){
    txt_saludo.innerHTML = ' <span class="rojo">rojo</span>';
}

function cambiar_dato2(){
    txt_saludo.innerHTML = '<span class="azul">azul</span>';
}

btn_saludo2.addEventListener("click",cambiar_dato);
btn_saludo3.addEventListener("click",cambiar_dato2);
