// 1. Verifica se um numero é par 
function NumeroPar(n) {
    return n % 2 ==0;
}

// 2 Verifica se uma frase contém determinada palavra
function ContemPalavra(frase, palavra) {
    return frase.toLowerCase().includes(palavra.toLowerCase());    
}

// 3. Simula validacao de login simples
function LoginValido(usuario, senha) {
    const usuarioValido = "admin";
    const senhaValido = "1234";
    return usuario === usuarioValido && senha === senhaValido;
}

// 4. Verifica se uma idade é maior ou igual a 18
function MaiorIdade(idade) {
    return idade > 18;
}

//exportando funcoes 
module.exports = {NumeroPar, ContemPalavra, LoginValido, MaiorIdade};