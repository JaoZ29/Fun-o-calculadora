function calculadora(): void {
    const prompt = require(`prompt-sync`)();

    let continuar: boolean = true;

    while (continuar) {
        console.log(`Qual operação deseja?`);
        console.log(`+ --> Adição`);
        console.log(`- --> Subtração`);
        console.log(`* --> Multiplicação`);
        console.log(`/ --> Divisão`);
        
        const opcao: string = prompt(`Digite a opção desejada: `);

        let numeroUm: number = 0; 
        let numeroDois: number = 0;
        let resultado: number = 0;

        switch (opcao) {
            case '+':
                numeroUm = parseInt(prompt(`Digite o 1º número: `));
                numeroDois = parseInt(prompt(`Digite o 2º número: `));
                resultado = numeroUm + numeroDois;
                console.log(`O valor da soma de ${numeroUm} com ${numeroDois} é ${resultado}`);
                break;
            case '-':
                numeroUm = parseInt(prompt(`Digite o 1º número: `));
                numeroDois = parseInt(prompt(`Digite o 2º número: `));
                resultado = numeroUm - numeroDois;
                console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} é ${resultado}`);
                break;
            case '*':
                numeroUm = parseInt(prompt(`Digite o 1º número: `));
                numeroDois = parseInt(prompt(`Digite o 2º número: `));
                resultado = numeroUm * numeroDois;
                console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} é ${resultado}`);
                break;
            case '/':
                numeroUm = parseInt(prompt(`Digite o 1º número: `));
                numeroDois = parseInt(prompt(`Digite o 2º número: `));
                if (numeroDois === 0) {
                    console.log(`Erro: Divisão por zero.`);
                } else {
                    resultado = numeroUm / numeroDois;
                    console.log(`O valor da divisão de ${numeroUm} por ${numeroDois} é ${resultado}`);
                }
                break;
            default:
                console.log(`Opção inválida!`);
        }

        const continuarOpcao: string = prompt(`Para continuar digite "1". Para sair digite qualquer outra tecla: `);
        if (continuarOpcao !== '1') {
            continuar = false;
        }
    }

    console.log(`Fim do programa.`);
}
