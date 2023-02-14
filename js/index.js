'use strict';

console.log('ready');

// VARIABLES DE HTML 
const betNumber = document.querySelector('.js-bet');
const button = document.querySelector('.js-button');
const clueMessage = document.querySelector('.js-clue');
const counterMessage= document.querySelector('.js-counter');
const randomNumber= getRandomNumber(100); 

// FUNCIONES

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

console.log ('Número aleatorio: ' +randomNumber);
console.log ('Número de la jugadora' +betNumber.value); 

function handleClickButton (ev){
    ev.preventDefault; 
    console.log ('Número de la jugadora: ' +betNumber.value); 
    if (betNumber.value < randomNumber){
        clueMessage.innerHTML='Demasiado bajo';
    }
    else if(betNumber.value > randomNumber){
        clueMessage.innerHTML='Demasiado alto';
    }
    else{
        clueMessage.innerHTML='¡Has ganado campeona!'; 
    }
}

// EVENTOS 

button.addEventListener('click', handleClickButton);