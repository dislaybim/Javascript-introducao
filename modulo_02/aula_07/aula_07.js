var pessoa = {
    nome: 'Dislaybson',
    sobrenome: 'Kels',
    idade: 45,
    nome_completo: function (){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nome_completo());