let inputs = document.getElementsByClassName("input-form");
for(let input of inputs){
    input.addEventListener("blur", function(){
        if(input.value.trim() != "") {
            input.classList.add("has-val")
        } else {
            input.classList.remove("has-val")
        }
    });
}


const emailCerto = 'teste@gmail.com';
const senhaCerta = '123';

function verificar(){
    var email = document.getElementById ('email').value;
    var senha = document.querySelector('#password').value;

    if(email != '' && senha!= ''){

        var resultado = this.login(email, senha);

        if(resultado == true){
            alert('Login Efetuado com sucesso: usuário Vitor')
        }else{
            alert('Login não efetuado!')
        }
    
    }else{
        alert('Por favor, preencha o seu e-mail e senha!');
    } 

}
function login(email, senha){

    if(email == emailCerto && senha == senhaCerta){
        alert("Login Efetuado com sucesso!");
        return true;
    }else{
        alert('Email e/ou senha inválidos!');
        return false;
    }


}

