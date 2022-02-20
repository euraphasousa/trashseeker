

function salto(){
    if (document.getElementById("barco").classList != "salto"){
        document.getElementById("barco").classList.add("salto");
        setTimeout(function (){
            document.getElementById("barco").classList.remove("salto");
        },550)

    }
}
document.addEventListener("keydown",function (event){
    salto();
})