// BREAK para de executar o CASE
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
    case 10:
    case 9:
        console.log('Quadro de Honra')
        break
    case 8:
    case 7:
        console.log('Aprovado')
        break
    case 6:
    case 5:
    case 4:
        console.log('Recuperação')
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Reprovado')
        break
    default:
        console.log('Nota Invalida')
        break
    }
}



imprimirResultado(9.1)
imprimirResultado(7.1)
imprimirResultado(5.1)
imprimirResultado(4.1)
imprimirResultado(1.1)
imprimirResultado(0.1)
imprimirResultado(-1)
imprimirResultado('')
imprimirResultado(' ')