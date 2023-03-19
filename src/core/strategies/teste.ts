function validarSenha(senha: string) {
  // Verificar se a senha tem pelo menos 8 caracteres
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    return regex.test(senha)
}

console.log(validarSenha("Nego000@"));
