'use strict';

/* Functions */

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
