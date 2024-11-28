// Usar métodos em objetos
// Crie um objeto chamado calculadora com duas propriedades: numero1 e numero2, e um método somar() que retorna a soma de numero1 e numero2.
let calculadora = {
    numero1: 5,
    numero2: 5,
    somar: function () {
        return this.numero1 + this.numero2;
    }
};

console.log(calculadora.somar());