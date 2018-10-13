//
// Autor: Joubert Saquett
// Descrição: Neste arquivo existe diversas funções para conversão de tipos.
//

////////////////////////////////////////////////////////
//converter string ou decimal para Inteiro
////////////////////////////////////////////////////////
var a = "10.00";
var b = parseInt(a);

var a = "10";
var b = parseInt(a);

////////////////////////////////////////////////////////
//Converter Numero para String
////////////////////////////////////////////////////////
var a = 15;
var b = num.toString();

////////////////////////////////////////////////////////
//Converte Numero para Moeda
////////////////////////////////////////////////////////
function numberReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}
var x = numberReal(9999000.33);
console.log(x);