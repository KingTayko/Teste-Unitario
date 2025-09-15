const {NumeroPar, ContemPalavra, LoginValido, MaiorIdade} = require("./app")

// Teste NumeroPar
test('Deve retornar true para número par', () => {
   expect(NumeroPar(4)).toBe(true);
});

test("Deve retornar false para número ímpar", () => {
    expect(NumeroPar(7)).toBe(false);
});


//Teste contemPalavra
test('Deve retornar true se a palavra estiver na frase', () => {
    expect(ContemPalavra("O rato roeu a roupa", "rato")).toBe(true);
});

test('Deve retornar false se a palavra não estiver na frase ', () => {
    expect(ContemPalavra("O rato roeu a roupa", "gato")).toBe(false);
});


//Teste LoginValido
test('Deve retornar true para usuario e senha corretos', () => {
    expect(LoginValido("admin", "1234")).toBe(true);
});

test("Deve retornar false para usuario ou senha incorretos", () => {
    expect(LoginValido("user", "senha")).toBe(false);
});


//Teste MaiorIdade
test('Deve retornar true se idade >= 18', () => {
  expect(MaiorIdade(20)).toBe(true);
});

test('Deve retornar false se idade < 18', () => {
  expect(MaiorIdade(16)).toBe(false);
});





