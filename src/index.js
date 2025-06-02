export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;
}

function extraiParagrafos(texto){
    return texto.split('\n');// \n quebra de linha (caracter de escape)
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');// Expressão regular
}

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.toLowerCase().split(' ');// Fazer condicional para palavras com ponto, com vírgula, com parenteses
    const resultado = {};
    //objeto[propriedade] = valor;
    // Se a propriedade não existe, ela é criada
    // Se já existir, adiciona os valores atribuídos

    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
        const palavraLimpa = limpaPalavras(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}

