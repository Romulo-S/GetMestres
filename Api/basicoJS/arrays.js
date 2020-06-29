let numbers = [1, 2, 3, 4]
let pessoas = [
    { nome: 'aluno 1' },
    { nome: 'aluno 2' },
    { nome: 'aluno 3' }
]

console.log('antes:', pessoas)


pessoas.push({ nome: 'ricardo' })

console.log('depois', pessoas)

pessoas.forEach(el => {
    console.log(`olá Aluno ${el.nome}`)
})