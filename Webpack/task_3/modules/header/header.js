import $ from 'jquery';
import './header.css';

$(document).ready(function() {
  console.log('Init header');
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
});
