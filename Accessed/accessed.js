function acesso(form) {

    form.txtEmail.value = form.txtEmail.value.toLowerCase()
    form.txtPassword.value = form.txtPassword.value.toLowerCase()

    if (form.txtEmail.value == "pudim@deleite.com" && form.txtPassword.value == "pudim123@") {
        location = "../Accessed/accessed.html"}
    else {
        form.txtEmail.value = ""
        form.txtPassword.value = ""
        alert("Login or password error!")
    }

    var email = txtEmail
    var senha = txtPassword

    if (email == txtEmail && senha == txtPassword) {
        alert('Email e senha capturado.')
        confirm('Esse é o email recebido: ' + email.value)
    }

    else {
        alert('Email não capturado.' + 'Senha não capturada')
    }

}
