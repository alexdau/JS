'use strict'

const modal = document.querySelector('.desc');
const show = document.querySelector('button');
const close = document.querySelector('span');

show.addEventListener('click', function() {
    modal.classList.remove('hide');
} );

close.addEventListener('click', function() {
    modal.classList.add('hide');
} );