// dashboard_main.js

// Import jQuery
import $ from 'jquery';
// Import debounce function from lodash
import debounce from 'lodash/debounce';

// Function to create and append elements
function createDashboardElements() {
    // Create and append the first paragraph
    $('<p>').text('Holberton Dashboard').appendTo('body');

    // Create and append the second paragraph
    $('<p>').text('Dashboard data for the students').appendTo('body');

    // Create and append the button element
    $('<button>').text('Click here to get started').appendTo('body');

    // Create and append the paragraph with id 'count'
    $('<p>').attr('id', 'count').appendTo('body');

    // Create and append the last paragraph
    $('<p>').text('Copyright - Holberton School').appendTo('body');
}

// Function to update counter
let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Call the function to create and append elements when the document is ready
$(document).ready(function() {
    createDashboardElements();

    // Bind debounce function to button click event
    $('button').on('click', debounce(updateCounter, 500));
});