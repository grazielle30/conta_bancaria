import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let contas: ContaController = new ContaController();

       
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];
                
    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("               🏦 BANCO DA LAMENTACAO                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar Todas as Contas               ");
        console.log("            3 - Buscar Conta Por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir Valores Entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);
                
        console.log("Entre com a Opcao Desejada: ")
        opcao = readlinesync.questionInt("");

        
        if (opcao ==9) {
            console.log(colors.fg.greenstrong,
                "\nBanco da Lamentacao - Entre e Chore!\n");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
            
        }

        switch (opcao){
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o Numero da Agencia: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da Conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo de conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

                console.log("\nDigite o saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));

                        break;
                    case 2:
                        console.log("Digite o Dia do Aniversario da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        
                        break;
                }

                keyPress()
                break;
            case 2: 
                console.log(colors.fg.whitestrong, "\n\nListar Todas as Contas\n\n", colors.reset);

                contas.listarTodas();    
                    
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar Dados da Conta - por Numero\n\n", colors.reset);

                console.log("Digite o Numero da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados da Conta\n\n", colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("Digite o Numero da Agencia: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da Conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da Conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                                break;

                        case 2:
                            console.log("Digite o Dia do Aniversario da Conta Poupanca: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                                break;
                                    
                    }
                } else {
                    console.log(colors.fg.red, "\nA Conta Numero: " + numero + "não foi encontrada!", colors.reset);
                }
                    
                keyPress()    
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                
                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\n\Deposito\n\n", colors.reset);

                console.log("Digite o Numero da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Deposito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferencia Entre Contas\n\n", colors.reset);

                console.log("Digite o Numero da Conta Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Numero da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o valor do Deposito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);
                

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\n\n\Opcao Invalida\n\n", colors.reset);

                keyPress()
                break;
        }    
    }
}

export function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por: Grazielle Gualter");
    console.log("Generation Brasil - grazielleg@genstudents.org");
    console.log("https://github.com/grazielle30/conta_bancaria.git");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}    

main();