
var personagem = {  //defino o objeto personagem, na qual temos os seguintes atributos e valores
    nome: 'Dislaybson', //nome da pessoa
    idade: 30,          //idade
    pais: 'Brasil',     //país
    olhos: ['preto', 'azul'],   //cor dos olhos
    caracteristicas:{   //outro objeto dentro desse objeto
        forca: 20,      //força
        magia: 5,       //magia
        stamina: 15     //stamina
    }
}

console.log(`${personagem.nome} tem ${personagem.idade}`);  //acessar o nome do personagem e dizer a idade, relacionando com strings
console.log(personagem.caracteristica.magia);               //pegando o poder de magia
console.log(personagem.olhos[1]);                           //pegando a cor dos olhos.