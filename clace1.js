const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const result = document.querySelector('#resultado');
const btn = document.querySelector('#btncalcular');
const formulario = document.querySelector('#formulario');
let input11;
let input22;

formulario.addEventListener('click', sumarinput);

function sumarinput(event){
    // console.log({event})
    // event.preventDefault();
    input11 = parseInt(input1.value);
    input22 = parseInt(input2.value);
    let total  = input11 + input22;
    result.innerText = "esta es el resultado: " + total 
    console.log( "esta es el resultado: " + total);
}