// vou criar um cadrasto de funcionários em um banco.
// primeiramente criar a estrutura de dados.

var usuario = {//aqui está o escopo de cadastro de usuário.
    //nome da pessoa
    //sobrenome
    //data de nascimento
    //cpf
    //genero
    //estado civil
    nome: [],
    sobrenome: [],
    nascimento:{
        dia: [],
        mes: [],
        ano: []
    },
    cpf: [],
    genero: [],
    estado_civil: []

}

//agora iremos arrumar uma forma de cadras tar funcionários nessa estrutura de dados.
//não precisa criar novas variáveis, adiciona tudo direto
var contagem = 0;
var loop=true;   //variável para controlar o loop infinito
var posicao = 0;



while(loop){    //loop, aqui é onde ocorrerá o cadrasto de cada pessoa.
    var habilita = window.prompt("deseja cadastrar mais alguém(s/n): ");    //variável que armazena o valor de da resposta 
    if(habilita == 's'){    //verifica se é sim, habilita o loop para cadastrar mais uma pessoa
        loop = true;
    }else{// se não, desabilita o loop e não cadastra mais ninguem.
        loop = false;
    }
    if((loop)){
        usuario.nome[posicao] = window.prompt(`Nome: `);
        usuario.sobrenome[posicao] = window.prompt(`Sobrenome: `);
        usuario.nascimento.dia[posicao] = Number.parseInt(window.prompt("Dia do nascimento: "));
        usuario.nascimento.mes[posicao] = Number.parseInt(window.prompt("Mês do nascimento: "));
        usuario.nascimento.ano[posicao] = Number.parseInt(window.prompt("Ano do nascimento: "));
        usuario.cpf[posicao] = window.prompt("CPF: ");
        usuario.genero[posicao] = window.prompt("Gênero: ");
        usuario.estado_civil[posicao] = window.prompt("Estado Civíl: ");
        posicao++;
    }
}

// Solicita ao usuário que digite o nome que deseja procurar
var nome = window.prompt(`Digite o nome que deseja procurar:`);

// Verifica se o nome fornecido pelo usuário existe como propriedade no objeto 'usuario'
if (usuario.pessoa && usuario.pessoa[nome]) {
    // Se existir, armazena o valor da propriedade correspondente na variável 'pessoa'
    var pessoa = usuario.pessoa[nome];
    
    // Exibe o valor encontrado
    window.alert(`Dados da pessoa com o nome "${nome}":`, pessoa);
} else {
    // Se o nome não for encontrado, exibe uma mensagem de erro
    window.alert(`Pessoa com o nome "${nome}" não encontrada.`);
}



console.log(usuario);