let idade = 19
let terminouEm = true
let cursandoFacul = true

function consultaDados(idade, terminouEm, cursandoFacul){
    if(idade>=18){
        console.log("É maior de idade")
    }else{
        console.log("Não é maior de idade")
    }

    if(terminouEm){
        console.log("Terminou ensino médio")
    }else{
        console.log("Não terminou ensino médio")
    }

   if(!cursandoFacul){
        console.log("Não está cursando faculdade")
   }else{
        console.log("Está cursando faculdade")
   }
}

consultaDados(idade,terminouEm,cursandoFacul)