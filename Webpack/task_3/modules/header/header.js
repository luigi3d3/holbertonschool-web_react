// Importar jQuery
import $ from 'jquery';

// Imprimir un mensaje de inicio en la consola
console.log('Init header');

// Agregar el logo y el título H1 al encabezado
$(document).ready(function() {
  // Agregar el logo
  const logoUrl = require('../assets/holberton-logo.jpg');
  $('header').append(`<img src="${logoUrl}" alt="Holberton Logo">`);

  // Agregar el título H1
  $('header').append('<h1>Holberton Dashboard</h1>');
});
