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

function handleClickButton (ev){
    ev.preventDefault(); 
    console.log ('Número de la jugadora: ' +betNumber.value); 
       
    if (betNumber.value > 100 || betNumber.value < 0 ){
        clueMessage.innerHTML='¡El número debe estar entre 1 y 100!'; 
    }
    else if (betNumber.value < randomNumber){
        clueMessage.innerHTML='Demasiado bajo';
    }
    else if(betNumber.value > randomNumber){
        clueMessage.innerHTML='Demasiado alto';
    }
    else {
        clueMessage.innerHTML='¡Has ganado campeona!'; 
    }
    counterFx(); 
}

// EVENTOS 

button.addEventListener('click', handleClickButton);

