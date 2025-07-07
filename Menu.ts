import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DA LAMENTACAO                  ");
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
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break;
            case 2: 
                console.log(colors.fg.whitestrong,
                    "\n\nListar Todas as Contas\n\n", colors.reset);
                    
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar Dados da Conta - por Numero\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados da Conta\n\n", colors.reset);
                    
                keyPress()    
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\n\Deposito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia Entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\n\n\Opcao Invalida\n\n", colors.reset);

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