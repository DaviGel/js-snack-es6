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

// Snack 3

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
  // let { 'punti fatti': points, 'falli subiti': fouls } = footbalTeam;
  // points = randomNumber();
  // fouls = randomNumber();
  footbalTeam['punti fatti'] = randomNumber();
  footbalTeam['falli subiti'] = randomNumber();
});

console.log(footbalTeams);

const newArrayFT = footbalTeams.map((teams) => {
  const { nome, 'falli subiti': fouls } = teams;
  return { nome, fouls };
});

console.log(newArrayFT);
