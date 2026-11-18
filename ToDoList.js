const readline = require('readline-sync');

let tarefas = [];

function adicionarTarefa() {
  let novaTarefa = readline.question('\nDigite uma nova tarefa: ');
  let responsavel = readline.question('\nQuem é o responsável por essa tarefa? \nDigite o nome: ');
  let prazo = readline.question('\nQual é o prazo para essa tarefa? (DD/MM/AAAA) \nDigite a data: ');
  console.log(`\nTarefa adicionada: ${novaTarefa}, Responsável: ${responsavel}, Prazo: ${prazo}`);
  tarefas.push(
    { Tarefa: novaTarefa, Responsável: responsavel, Prazo: prazo, status: 'Pendente' }
    );
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log('\nNenhuma tarefa cadastrada.');
        return;
    }
    console.log('Tarefas:\n');
    console.table(tarefas);
}

function marcarComoConcluida() {
    listarTarefas();
    let indice = readline.questionInt('\nDigite o número da tarefa que você deseja marcar como concluída: ');
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].status = 'Concluída';
        console.log(`\nTarefa "${tarefas[indice].Tarefa}" marcada como concluída.`);
    } else {
        console.log('\nÍndice inválido. Tente novamente.');
    }
}

function AtualizarTarefa() {
    listarTarefas();
    let indice = readline.questionInt('\nDigite o número da tarefa que você deseja atualizar: ');
    if (indice >= 0 && indice < tarefas.length) {
        let novaTarefa = readline.question('\nDigite a nova descrição da tarefa: ');
        let novoResponsavel = readline.question('\nQuem é o novo responsável por essa tarefa? \nDigite o nome: ');
        let novoPrazo = readline.question('\nQual é o novo prazo para essa tarefa? (DD/MM/AAAA) \nDigite a data: ');
        tarefas[indice].Tarefa = novaTarefa;
        tarefas[indice].Responsável = novoResponsavel;
        tarefas[indice].Prazo = novoPrazo;
        console.log(`\nTarefa atualizada: ${novaTarefa}, Responsável: ${novoResponsavel}, Prazo: ${novoPrazo}`);
    } else {
        console.log('\nÍndice inválido. Tente novamente.');
    }
}

function excluirTarefa() {
    listarTarefas();
    let indice = readline.questionInt('\nDigite o número da tarefa que você deseja excluir: ');
    if (indice >= 0 && indice < tarefas.length) {
        let tarefaExcluida = tarefas.splice(indice, 1);
        console.log(`\nTarefa "${tarefaExcluida[0].Tarefa}" excluída.`);
    } else {
        console.log('\nÍndice inválido. Tente novamente.');
    }
}

function encerrar() {
    console.log('\nTem certeza que deseja sair, todas as suas tarefas serão perdidas? (s/n) \nDigite a opção: ');
    let resposta = readline.question().toLowerCase();
    if (resposta === 's') {
        console.log('\nEncerrando o programa. Até mais!');
        return true;
    } else {
        console.log('\nRetornando ao menu principal.');
        return false;
    }
}

function start() {
  let opcao;
  do {
    opcao = readline.question(`\nEscolha uma opcao: \n1- Adicionar tarefa \n2- Listar tarefas \n3- Marcar como Concluída \n4- Atualizar tarefa \n5- Excluir Tarefa \n6- Sair \nDigite a opcao: `);

switch (opcao) {
    case '1':
        adicionarTarefa();
        break;

    case '2':
        listarTarefas();
        break;
    
    case '3':
        marcarComoConcluida();
        break;
    
    case '4':
        AtualizarTarefa();
        break;
    
    case '5':
        excluirTarefa();
        break;
    
    case '6':
        encerrar();
        break;

    default:
        console.log('\nOpção inválida. Tente novamente.');
    }
  } while (opcao !== '6');
}

start();