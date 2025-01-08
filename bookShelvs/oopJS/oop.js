function calcArea()
{
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    let area = base * altura;

    // saida
    let areaSaida = document.getElementById('area').innerHTML = `A área do retângulo é: ${area}`;
}




let carro = [];

function carShow(){
    console.log(carro[0]);
    let carAttr = document.getElementById('attr').value;
    carro[0].push(carAttr);   
    console.log(carro[0]);
    
}
