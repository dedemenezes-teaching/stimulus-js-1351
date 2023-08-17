import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from './controllers/movies_controller.js'
Stimulus.register('movies', MoviesController)


// const btn = document.getElementById('click-me');
// // console.log(btn);

// btn.addEventListener('click', (event) => {
//   console.log(event.currentTarget.dataset);
//   event.currentTarget.classList.remove('btn-primary')
//   event.currentTarget.classList.add('btn-warning')
// })
