function calculadora() {
    var prompt = require("prompt-sync")();
    var continuar = true;
    while (continuar) {
        console.log("Qual opera\u00E7\u00E3o deseja?");
        console.log("+ --> Adi\u00E7\u00E3o");
        console.log("- --> Subtra\u00E7\u00E3o");
        console.log("* --> Multiplica\u00E7\u00E3o");
        console.log("/ --> Divis\u00E3o");
        var opcao = prompt("Digite a op\u00E7\u00E3o desejada: ");
        var numeroUm = 0;
        var numeroDois = 0;
        var resultado = 0;
        switch (opcao) {
            case '+':
                numeroUm = parseInt(prompt("Digite o 1\u00BA n\u00FAmero: "));
                numeroDois = parseInt(prompt("Digite o 2\u00BA n\u00FAmero: "));
                resultado = numeroUm + numeroDois;
                console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois, " \u00E9 ").concat(resultado));
                break;
            case '-':
                numeroUm = parseInt(prompt("Digite o 1\u00BA n\u00FAmero: "));
                numeroDois = parseInt(prompt("Digite o 2\u00BA n\u00FAmero: "));
                resultado = numeroUm - numeroDois;
                console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " \u00E9 ").concat(resultado));
                break;
            case '*':
                numeroUm = parseInt(prompt("Digite o 1\u00BA n\u00FAmero: "));
                numeroDois = parseInt(prompt("Digite o 2\u00BA n\u00FAmero: "));
                resultado = numeroUm * numeroDois;
                console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " \u00E9 ").concat(resultado));
                break;
            case '/':
                numeroUm = parseInt(prompt("Digite o 1\u00BA n\u00FAmero: "));
                numeroDois = parseInt(prompt("Digite o 2\u00BA n\u00FAmero: "));
                if (numeroDois === 0) {
                    console.log("Erro: Divis\u00E3o por zero.");
                }
                else {
                    resultado = numeroUm / numeroDois;
                    console.log("O valor da divis\u00E3o de ".concat(numeroUm, " por ").concat(numeroDois, " \u00E9 ").concat(resultado));
                }
                break;
            default:
                console.log("Op\u00E7\u00E3o inv\u00E1lida!");
        }
        var continuarOpcao = prompt("Para continuar digite \"1\". Para sair digite qualquer outra tecla: ");
        if (continuarOpcao !== '1') {
            continuar = false;
        }
    }
    console.log("Fim do programa.");
}
calculadora();
