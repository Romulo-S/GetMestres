let ingrediente1 = "laranja"
let ingrediente2 = "cenoura"
let comLeite = true


const fazerSuco = (ingrediente1, ingrediente2, leite) => {
    var veioComCremoso = 'Sim'
    console.log(`Seu suco sera de ${ingrediente1} com ${ingrediente2} ${(leite = true ? 'cremoso' : '')}`)
    console.log(`Função - ${veioComCremoso}`)
}

fazerSuco(ingrediente1, ingrediente2, comLeite)
console.log(`Fora -  ${veioComCremoso}`)

// fazerSuco(1, 2, () => {
//     console.log('Ual')
// })

// fazerSuco('morango', 'acerola', true)
// fazerSuco2('laranja', 'cenoura', true)