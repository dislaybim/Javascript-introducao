

function novo_elemento(habilita){   //função para adicionar elemento novo nesse array

    for(var i=0; i < 1;i++){    //loop que acrescenta somente 1 elemento por vez
        var incluir = window.prompt("digite o elemento: ");   //digita elementa
    }
    return incluir; //retorna para a variável

}

lista_vazia = [];   //iniciei o programa criando uma lista vazia
var controle;   //variável para verificar se foi sim ou não
var loop=true;  //variável que habilita o loop infinito

while(loop){    //inicialização do loop infinito
    var habilita = window.prompt("deseja continuar(s/n): ");    //var habilita, se digitar (s/n), teremos as seguintes condições
    if(habilita=='s'){  //se sim, controle true
        controle = true;
    }else{  //se não, controle false
        controle = false;
        loop = false;   //loop também se encenrra e comandos também
    }

    if(controle==true){     //se controle for true
        var adiciona = novo_elemento(); //novo elemento será adicionado no array
        }
        lista_vazia.push(adiciona); //adiciona elemento dentro dessa lista vazia
    }  
    
lista_vazia.pop();  //é porque tem um bug que sempre retorna o ultimo elemento repetido, dessa forma eliminamos.

window.alert(lista_vazia);  //print na janela
console.log(lista_vazia)    //print no console