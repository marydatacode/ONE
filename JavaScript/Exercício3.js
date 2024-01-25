alert('Boas vindas ao jogo do número secreto');

// Math.random gera nnums aleatórios > 0 e < 1.
// Para gerar um número inteiro foi multiplicado Math.random por 10 e utilizado a função parseInt, para pegar apenas a parte inteira.
// Como ta sendo pedido para gerar um núm entre 1 e 10, 
// foi colocado +1 para somar o núm mais um, já que os número so tinham 1 casa decimal
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

// Operação Tenário ':', sentenças com 3 ifs
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


// Número até 100
alert('Boas vindas ao jogo do número secreto');

// Math.random gera nnums aleatórios > 0 e < 1.
// Para gerar um número inteiro foi multiplicado Math.random por 10 e utilizado a função parseInt, para pegar apenas a parte inteira.
// Como ta sendo pedido para gerar um núm entre 1 e 100, 
// foi colocado +1 para somar o núm mais um, já que os número so tinham 2 casas decimais
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

// Operação Tenário ':' para decidir entre singular ou plural
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
