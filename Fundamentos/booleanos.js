let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Se colocar apenas isAtivo vai exibir o numero e nao
// sua operacao logica deve ser colocado !! que seria
// a negacao da nagacao, ou seja, verdadeiro.
isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)
console.log(!isAtivo)
console.log(!!!!!!!!!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || 0 || null || ' '))

let nome = ''
console.log(nome || 'Desconhecido')
