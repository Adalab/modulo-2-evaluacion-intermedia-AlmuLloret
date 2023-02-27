'use strict';

// VARIABLES 
const betNumber = document.querySelector('.js-bet');
const button = document.querySelector('.js-button');
const clueMessage = document.querySelector('.js-clue');
const counterMessage= document.querySelector('.js-counter');
const randomNumber= getRandomNumber(100); 
let counter=0

// FUNCIONES

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

console.log ('Número aleatorio: ' +randomNumber);

function counterFx(){
    counter=counter+1;
    counterMessage.innerHTML=`Número de intentos: ${counter}`; 
}

function checkNumber(){
    
    const valueNumber=parseInt(betNumber.value);
    console.log ('Número de la jugadora: ' +betNumber.value); 
    
    if (isNaN(valueNumber)){
        paintMsj('Por favor, introduce un número'); 
    }
    else if (betNumber.value > 100 || valueNumber < 0 ){
        paintMsj('¡El número debe estar entre 1 y 100!'); 
    }
    else if (valueNumber < randomNumber){
        paintMsj('Demasiado bajo');
    }
    else if(valueNumber > randomNumber){
        paintMsj('Demasiado alto');
    }
    else {
        paintMsj('¡Has ganado campeona!'); 
    }
    

}

function handleClickButton (ev){
    ev.preventDefault(); 
    checkNumber()
    counterFx(); 
    
}

function paintMsj(msj) {
    clueMessage.innerHTML = msj;
  }

// EVENTOS 

button.addEventListener('click', handleClickButton);

