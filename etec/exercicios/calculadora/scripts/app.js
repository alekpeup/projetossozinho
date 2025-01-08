
function receberF()
{
    let valores = [
        valo1 = {
            valor: Number.parseFloat(document.getElementById('entradaum').value)
        },
    
        valor2 = {
            valor: Number.parseFloat(document.getElementById('segundoValor').value)
        }
    ];

    let resultadoFinal = document.getElementById('resultadoP');
    resultadoFinal.innerHTML = (valores[0].valor + valores[1].valor).toFixed(2);

}

let botaun = document.getElementById('botao');
botaun.attributes;

