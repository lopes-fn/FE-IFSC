var inteiros = [6, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 , 7, 8, 0,  9, 10];

//Atividade 1

function somaArray (arr) {
    let soma = 0;

    for (n of arr) soma += n;

    // for (let i = 0; i < arr.length; i++) {
    //     soma += arr[i];
    // }

    console.log("soma do array: " + soma);
}
somaArray(inteiros);

//Atividade 2

function mediaArray(arr) {
    let soma = 0;

    for (n of arr) soma += n;

    let media = soma/arr.length;

    console.log("media do array: " + media);
}
mediaArray(inteiros);


//Atividade 3

function menorElemento(arr) {
    let menor = arr[0];

    for (n of arr) if (menor > n) menor = n;

    console.log("menor numero: " + menor);
}
menorElemento(inteiros);

//Atividade 4

function segundoMaior(arr) {
    let maior = arr[0];
    let segundoMaior = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (maior < arr[i]) {
            segundoMaior = maior;
            maior = arr[i];
        }
    }

    console.log("segundo maior: " + segundoMaior);
}
segundoMaior(inteiros);

// Atividade 5

function impares(arr) {
    let cont = 0;

    for (n of arr) if (n % 2 != 0) cont++;

    console.log("contagem de numeros impares: " + cont);
}
impares(inteiros);