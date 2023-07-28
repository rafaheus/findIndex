const nomes = ['joao', 'ana', 'luis', 'julia'];

const resultado = nomes.findIndex((nome) => {
    return nome === 'julia';
});

console.log(resultado);