// Verificar desconto
// Dado o valor de uma compra em valorCompra, aplique um desconto de 10% (retorne o valor com desconto) se a compra for maior que R$100, senão mantenha o valor original.
let valorCompra = 100;
if (valorCompra >= 100) {
    valorCompra *= 0.90;
    console.log (`Valor com desconto: R$ ${valorCompra}`);
} else {
    console.log(`Valor sem desconto: R$ ${valorCompra}`);
};
