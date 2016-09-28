/* globals Rx */
const appContainer = document.getElementById('app-container');
const zipcodeInput = document.getElementById('zipcode-input');
const addLocationBtn = document.getElementById('add-location');

// Get stream of button clicks
const btnClickStream =
  Rx.Observable
    .fromEvent(addLocationBtn, 'click')
    .map(() => true)
    .forEach(val => console.log('btnClickStream val', val));