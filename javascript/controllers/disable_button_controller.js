import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['resetLink', 'button']


  connect() {
    console.log(this.resetLinkTarget)
  }


  disable() {
    console.log(this.element) // RETURNS THE HTML ELEMENT THAT CONTAINS THE data-controller
    this.buttonTarget.classList.remove('btn-primary')
    this.buttonTarget.classList.add('btn-warning')
    this.buttonTarget.disabled = true
    this.resetLinkTarget.classList.remove('d-none')
  }

  reset() {
    this.resetLinkTarget.classList.add('d-none')
    this.buttonTarget.disabled = false
    this.buttonTarget.classList.remove('btn-warning')
    this.buttonTarget.classList.add('btn-primary')
  }
}
