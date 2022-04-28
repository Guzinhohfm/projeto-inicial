function logar(){
    
var login = document.getElementById('txt')
var senha = document.getElementById('sen')


    if (login.value == "Gustavo" && senha.value == "1"){
        window.alert('Dados autenticados!!')   
    } else {
        window.alert ('Dados incorretos!!')
    }
}

