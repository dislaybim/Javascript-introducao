//CALCULAR A PORCENTAGEM DE DOIS NÚMEROS:
function calculo_porcentagem(total, parte){//defini a função que será a parte principal para realizar os o calculo de porcentagem.
    var resultado = (parte/total)*100;
    return resultado;
}
var x = Number.parseFloat(window.prompt("Diga o número total "));
var y = Number.parseFloat(window.prompt("Diga o número líquido "));
var porcentagem = calculo_porcentagem(x,y);
window.alert(`${porcentagem}% é a porcentagem total`);
