onload = function (){
    alert("'F11' ou 'CTRL + CMND + F' para uma melhor experiência!");

    document.getElementById("jogar").onclick = function (){
        document.getElementById("pg_escolher").style.display = "block"
        document.getElementById("pg_inicial").style.display = "none"
    }
    document.getElementById("dontdrown").onclick = function (){
        document.getElementById("pg_dificuldade").style.display = "block"
        document.getElementById("pg_escolher").style.display = "none"
    }
    document.getElementById("tenta").onclick = drown;
    document.getElementById("facil").onclick = function (){
        dif = 1
        drown();
    }
    document.getElementById("norm").onclick = function (){
        dif = 2
        drown();
    }
    document.getElementById("dif").onclick = function (){
        dif = 3
        drown();
    }
    document.getElementById("inicio").onclick = function (){
        document.getElementById("vermelho").style.display = "none";
        document.getElementById("pg_inicial").style.display = "block";
        document.getElementById("fundo").style.display = "block";
        document.getElementById("pg_perdeu").style.display = "none";
    }
    document.getElementById("rain").onclick = rain;

}

var dif;
var bonecodrown;
var aguadrown;
var drownres;


function drown(){
    document.getElementById("pg_perdeu").style.display = "none"
    document.getElementById("vermelho").style.display = "none"
    document.getElementById("verde").style.display = "none"
    document.getElementById("pg_dificuldade").style.display = "none";
    document.getElementById("fundo").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("fundodrown").style.display = "block";
    document.getElementById("poste").style.display = "block";
    document.getElementById("jogdrown").style.display = "block";
    document.getElementById("jogdrown").style.top = 810 + "px";
    document.getElementById("agua").style.display = "block";
    document.getElementById("agua").style.top = 1080 + "px"
    descida = setInterval(desce_jogador,500);
    subida = setInterval(subida_agua,25);
    colisao = setInterval(drowncolisao,1);
    console.log(bonecodrown);

    onkeyup = function (event){
        if (dif === 1){
            movdrown(event,12)
        }
        if (dif === 2){
            movdrown(event,8)
        }
        if (dif === 3){
            movdrown(event,5.4)
        }
    }


function movdrown(event,vel){
    switch (event.keyCode){
        case 32:
            if (parseInt(document.getElementById("jogdrown").style.top) > 170 ){
                document.getElementById("jogdrown").style.top = parseInt(document.getElementById("jogdrown").style.top) - vel + "px";
            }
            else{
                drownres = "ganhou";
                fim_drown();
            }
    }
    return drownres;

}

}

function desce_jogador() {
    if (parseInt(document.getElementById("jogdrown").style.top) < 450) {
        document.getElementById("jogdrown").style.top = parseInt(document.getElementById("jogdrown").style.top) + 10 + "px";
    }
    else if (parseInt(document.getElementById("jogdrown").style.top) < 650) {
        document.getElementById("jogdrown").style.top = parseInt(document.getElementById("jogdrown").style.top) + 3 + "px";

    }
}

function subida_agua(){
    document.getElementById("agua").style.top = parseInt(document.getElementById("agua").style.top) - 1 + "px";
}

function drowncolisao(){
    bonecodrown = parseInt(document.getElementById("jogdrown").style.top) + document.getElementById("jogdrown").height;
    aguadrown = parseInt(document.getElementById("agua").style.top);

    if (bonecodrown > aguadrown){
        drownres = "perdeu";
        fim_drown();
    }
    return drownres;

}

function fim_drown(){
    clearInterval(subida);
    clearInterval(descida);
    clearInterval(colisao);
    document.getElementById("logo").style.display = "block";
    document.getElementById("pg_perdeu").style.display = "block";
    document.getElementById("agua").style.display = "none";
    document.getElementById("jogdrown").style.display = "none";
    document.getElementById("fundodrown").style.display = "none";
    document.getElementById("poste").style.display = "none";
    if (drownres === "perdeu"){
        document.getElementById("vermelho").style.display = "block";
    }
    else if (drownres === "ganhou"){
        document.getElementById("verde").style.display = "block";
    }
}

function rain (){
    document.getElementById("logo").style.display = "none";
    document.getElementById("pg_escolher").style.display = "none"
    document.getElementById("fundo").style.display = "none";
    document.getElementById("fundorain").style.display = "block";
    document.getElementById("jograin").style.display = "block";
    document.getElementById("hearts").style.display = "block";
    document.getElementById("jograin").style.left = 50 + "px";
    setInterval(chuva,500);

    onkeydown = function (event){
        movrain(event);
    }
}


function movrain (event){
    switch (event.keyCode){
        case 39:{
            document.getElementById("jograin").style.left = parseInt(document.getElementById("jograin").style.left) + 15 + "px";

            if (document.getElementById("chuva").style.display != "none"){
                document.getElementById("heart3").src = "images/noheart.png";
                setTimeout(danorain,200);
                setTimeout(raindano,400);
                setTimeout(danorain,600);
                setTimeout(raindano,800);
            }

        }
        break;
        case 68:{
            document.getElementById("jograin").style.left = parseInt(document.getElementById("jograin").style.left) + 15 + "px";

            if (document.getElementById("chuva").style.display != "none"){
                document.getElementById("heart3").src = "images/noheart.png";
                setTimeout(danorain,200);
                setTimeout(raindano,400);
                setTimeout(danorain,600);
                setTimeout(raindano,800);
            }

        }

    }
}

function chuva(){
    var res = Math.floor(Math.random()*2);
    if (res === 0){
        document.getElementById("chuva").style.display = "block";
    }
    if (res === 1){
        document.getElementById("chuva").style.display = "none";

    }
}

function danorain(){
    document.getElementById("jograin").src = "images/jograindano.png";
}

function raindano(){
    document.getElementById("jograin").src = "images/jograin.png";
}