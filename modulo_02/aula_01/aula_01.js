//não é conveniente utilizar a função prompt, fora do contesto do navergador
//oque é uma função;
function imc(massa, altura) {
    var media;
    media = (massa / altura ** 2);
    //return media;   para casos de retornar somente um valor numérico
    //já em um caso que a gente desejaria interpretar esse valor numérico em condições.
    if (media < 18) {
        return `muito magro: ${media}`;
    }
    if (media >= 18 && media <= 24) {
        return `Peso ideal: ${media}`;
    }
    if (media > 24 && media <= 30) {
        return`Você ta um pouco gordo: ${media}`;
    }
    if (media > 30) {
        return `Você tem obesidade mórbida: ${media}`;
    }
}

var massa = Number.parseFloat(window.prompt("Diga a sua massa(kg): "))
var altura = Number.parseFloat(window.prompt("Diga a sua altura(m): "))
var resultado= imc(massa, altura);
console.log(resultado);
//window.alert(resultado);
