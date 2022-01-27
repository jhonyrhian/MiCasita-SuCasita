var imagensLink = [
    "https://img.olx.com.br/images/95/958224248151380.jpg",
    "https://img.olx.com.br/images/95/959245366674699.jpg",
    "https://img.olx.com.br/images/95/952258120265920.jpg",
    "https://img.olx.com.br/images/95/953201125553450.jpg",
]

var indiceAtual = 0
var indice = 0
function imagenzinhas(){for(indice = 0; indice < imagensLink.length; indice++){
    document.getElementsByClassName("mini__image")[indice].setAttribute("src", imagensLink[indice])
}}

function carrossel(){
    document.getElementById("imagem_corrente").setAttribute("src", imagensLink[indiceAtual])
    document.getElementsByClassName("mini__image")[indiceAtual].style.filter = "brightness(100%)"
    document.getElementsByClassName("mini__image")[indiceAtual].style.transform = "scale(1.2)"
    document.getElementsByClassName("mini__image")[indiceAtual].style.boxShadow = "5px 10px 5px rgba(0, 0, 0, 0.7)"
}

carrossel()
imagenzinhas()

function reseta(){
    for(indice = 0; indice < imagensLink.length; indice++){
    document.getElementsByClassName("mini__image")[indice].style.filter = "brightness(40%)"
    document.getElementsByClassName("mini__image")[indice].style.transform = "scale(1)"
    document.getElementsByClassName("mini__image")[indice].style.boxShadow = "0px 0px"
    }
}


        function hoover1(){
            reseta()
            indiceAtual = 0
            carrossel()
        }

        function hoover2(){
            reseta()
            indiceAtual = 1
            carrossel()
        }

        function hoover3(){
            reseta()
            indiceAtual = 2
            carrossel()
        }

        function hoover4(){
            reseta()
            indiceAtual = 3
            carrossel()
        }


function regressar(){
    if(indiceAtual > 0){
        indiceAtual -= 1 
        reseta()                 
    }else{
        indiceAtual = imagensLink.length -1
        reseta()
    }

    carrossel()
}            

function avancar(){
    if(indiceAtual < imagensLink.length -1){
        indiceAtual += 1 
        reseta()                   
    }else{
        indiceAtual = 0
        reseta()           
    }

    carrossel()
}
