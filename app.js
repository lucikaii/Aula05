'use strict'

const botaoMostrarNumeros = document.getElementById('mostrarNumeros')

function mostrarNumeros(){
    const numbers = document.getElementById('numbers').value.split(',')
    const container = document.getElementById('containerTodosNumeros')

    container.replaceChildren('')
    const ultimoIndice = numbers.length
    for (let contador=0; contador < ultimoIndice; contador++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numbers[contador]
        container.appendChild(novoSpan)
    }

}
botaoMostrarNumeros.addEventListener('click', mostrarNumeros)

const botaoMostrarNumerosPares = document.getElementById('mostrarNumerosPares')

function mostarNumerosPares(){

     const numbers = document.getElementById('numbers').value.split(',')
     const containerPares = document.getElementById('containerTodosNumerosPares')

     containerPares.replaceChildren('')
     const ultimoIndice = numbers.length
     for (let contador=0; contador < ultimoIndice; contador++){
         if(numbers[contador] % 2 == 0){
         const novoSpan = document.createElement('span')
         novoSpan.textContent = numbers[contador]
         containerPares.appendChild(novoSpan)
     }
     }
 }

 botaoMostrarNumerosPares.addEventListener('click', mostarNumerosPares)