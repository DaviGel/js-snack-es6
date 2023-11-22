'use strict';

/* Functions */

function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

/* Program */

// Snack 1

const bici = [
  {
    nome: 'Graziella',
    peso: 30,
  },
  {
    nome: 'Ludovica',
    peso: 12,
  },
  {
    nome: 'Rossana',
    peso: 32,
  },
  {
    nome: 'Marta',
    peso: 45,
  },
  {
    nome: 'Francesca',
    peso: 70,
  },
  {
    nome: 'Rossella',
    peso: 67,
  },
  {
    nome: 'Elisabetta',
    peso: 87,
  },
];

const container = document.createElement('div');
container.classList.add('container');
const body = document.querySelector('body');
body.append(container);

let tempWeight = 0;
let tempName = '';

bici.forEach((bicicletta, index) => {
  const { nome, peso } = bicicletta;
  if (index === 0) {
    tempName = nome;
    tempWeight = peso;
  } else if (tempWeight > peso) {
    tempName = nome;
    tempWeight = peso;
  }
});

container.innerHTML = `<span>La bici di nome: "${tempName}" pesa ${tempWeight}kg</span>`;

// Snack 2

const footbalTeams = [
  {
    nome: 'Palermo',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Milan',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Juventus',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Inter',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Roma',
    'punti fatti': 0,
    'falli subiti': 0,
  },
];

footbalTeams.forEach((footbalTeam) => {
  footbalTeam['punti fatti'] = randomNumber();
  footbalTeam['falli subiti'] = randomNumber();
});

console.log(footbalTeams);

const newArrayFT = footbalTeams.map((teams) => {
  const { nome, 'falli subiti': fouls } = teams;
  return { nome, fouls };
});

console.log(newArrayFT);

// Snack 3

const array = [2, 3, 5, 1, 2, 3, 55, 6, 1, 2, 3, 4, 5, 5, 22];

console.log(arrayReduced(array, 3, 8));

// num1 deve essere più piccolo di num2
function arrayReduced(array, num1, num2) {
  const newArray = array.filter((arrayElement, index) => {
    if (index >= num1 && index <= num2) return arrayElement;
  });
  return newArray;
}
