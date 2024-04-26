var nomes = ["Ana", "Carlos", "Bruna", "Juca", "Zezé", "Lulu"];
var notas = [8.3, 7.2, 9, 7.5, 8.2, 10];

function maiorNota(nomes, notas) {
    let notao = 0;
    let melhorAluno = "nenhum".replace

    for (let i = 0; i < notas.length; i++) {
        if (notao < notas[i]) {
            notao = notas[i];
            melhorAluno = nomes[i];
        }
    }

    console.log(melhorAluno + " tirou a maior nota: " + notao);

}

maiorNota(nomes, notas);

var inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function inverteArray(inteiros) {
    
    let invertido = [];

    for (n of inteiros) {
        invertido.unshift(n);
    }

    for (numero of invertido) console.log(numero);
}

inverteArray(inteiros);

var menores = [1,2,3,4,5];
var maiores = [6,7,8,9,10];

function uneArrays(menores, maiores) {
    let total = [];
    let spread = [...menores, ...maiores];

    for (numero of menores) { 
        total.push(numero);
    }

    for (numero of maiores) { 
        total.push(numero);
    }

    //for (numero of total) console.log(numero);
    console.log(total);
    console.log(spread);
}

uneArrays(menores, maiores);