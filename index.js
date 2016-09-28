/* globals Rx */
const appContainer = document.getElementById('app-container');
const zipcodeInput = document.getElementById('zipcode-input');
const addLocationBtn = document.getElementById('add-location');

// Get stream of button clicks
const btnClickStream =
  Rx.Observable
    .fromEvent(addLocationBtn, 'click')
    .map(() => true)
    // .forEach(val => console.log('btnClickStream val', val));

// Get stream of zip codes
const zipInputStream =
  Rx.Observable
    .fromEvent(zipcodeInput, 'input')
    .map(e => e.target.value)
    .filter(zip => zip.length === 5)
    // .forEach(val => console.log('zipInputStream val', val));

// Get zipcode after button clicked
const zipcodeStream =
  btnClickStream
    .withLatestFrom(zipInputStream, (click, zip) => zip)
    .distinct()
    .forEach(val => console.log('zipcodeStream val', val));