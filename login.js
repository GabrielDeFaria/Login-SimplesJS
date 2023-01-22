
        function logar(){

            var login = document.getElementById('cpf').value;
            var senha = document.getElementById('senha').value;

            if(login == "admin" && senha == "admin"){
                alert('Bem Vindo(a) Admin');
                location.href = "home.html";
            }else{
                alert('CPF ou Senha incorretos');
            }

        }