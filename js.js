onload = function (){
    document.getElementById("pg_escolher").style.display = "none";
    selecionar_jogo()
}

function selecionar_jogo(){

document.getElementById("jogar").onclick = function (){
    document.getElementById("pg_escolher").style.display = "block"
    document.getElementById("pg_inicial").style.display = "none"

}
}