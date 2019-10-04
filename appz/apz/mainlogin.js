var nomeElement = document.querySelector("input.nome")
var cargoElement = document.querySelector("input.cargo")
var idadeElement = document.querySelector("input.idade")
var passowordElement = document.querySelector("input.senha")
var datacadElement = document.querySelector("input.dctr")
var mandarElement = document.querySelector("button.manda")
var loginElement = document.querySelector("button.login")

var login = {
    loginema : "",
    loginse : "",
}

var h1car = document.querySelector("h1.cargoa")
var h1nom = document.querySelector("h1.nomea")
var h1ida = document.querySelector("h1.idadea")
var h1pas = document.querySelector("h1.senhaea")
var h1data = document.querySelector("h1.dataea")

var pcada = document.querySelector("p#texts")

var alunos = {
    aluno : "nome",
}
var cargos = {
    cargo : "cargo",
}
var idade = {
    idade: "idade",
}
var senha = {
    senha: "senha",
}
var datacad = {
    datacad : "datacad",
}


mandarElement.onclick = function(){
   
   var textNome = nomeElement.value
   alunos.nome = textNome
   
   var textNome = nomeElement.value= ''

   var textCargo = cargoElement.value
   cargos.cargo = textCargo
   
   var textCargo = cargoElement.value = ''

   var textIdade = idadeElement.value
   idade.idade = textIdade
   
   var textIdade = idadeElement.value = ''

   var textSenha = passowordElement.value
   senha.senha = textSenha
   
   var textSenha = passowordElement.value = ''

   var textData = datacadElement.value
   datacad.datacad = textData
   
   var textData = datacadElement.value = ''
    
   console.log('N: ', alunos.nome ,' C: ', cargos , ' I: ', idade ,' S: ', senha,' DC: ', datacad)

   alert('Validação feita com sucesso')
}

loginElement.onclick = function(){
    var recebeemalog = window.prompt('Seu nome de usuario')
    var recebesenlog = window.prompt('Sua senha')
     console.log(recebeemalog)
    if(recebeemalog === alunos.nome && recebesenlog === senha.senha){
       alert('Logado!')
       pcada.innerHTML = 'Bem vindo'
       h1car.innerHTML = cargos.cargo
       h1ida.innerHTML = idade.idade
       h1pas.innerHTML = senha.senha
       h1data.innerHTML = datacad.datacad
       h1nom.innerHTML = alunos.nome

    }else{
        alert('Erro de login!')
    }
}