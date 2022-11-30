let nacionalidade = prompt("Escreva sua nacionaliade").toLowerCase()

function nacionaVerifi(nacionalidade) {
    if(nacionalidade == "brasileira"){
        alert("Nacionalidade brasileira")
    }
    else if(nacionalidade == "argentina"){
        alert("Nacionalidade argentina")
    }
    else if(nacionalidade == "uruguaia"){
        alert("Nacionalidade uruguaia")
    }
    else if(nacionalidade == "chilena"){
        alert("Nacionalidade chilena")
    }
    else if(nacionalidade == "colombiana"){
        alert("Nacionalidade colombiana")
    }
    else{
        alert("Nacionalidade não encontrada")
    }
}

nacionaVerifi(nacionalidade)