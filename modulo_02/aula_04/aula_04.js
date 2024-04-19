var colors = ['azul', 'amalero', 'branco', 'preto', 'vermelho', 'verde'];//lista padrão em strings
var numeros = [1,2,3,4,5,6,7,8,9]; //lista só com números.
var matriz = [[1,2,3],//conseguimos também criar uma matriz 3x3     linha 0
             [4,5,6],   //linha 1
             [7,8,9]];  //linha 2
window.alert(colors);
window.alert(numeros);
window.alert(matriz);
window.alert(numeros[2]);   //numero 3
window.alert(colors[3]);    //cor preto
window.alert(matriz[2]);    //pegamos os valores da linha 2 {7,8,9}
window.alert(matriz[2][1]); //podemos ser até mesmo mais específicos pegando um valor único linha 2, coluna 1
//aqui no caso seria exatamente o número 8
