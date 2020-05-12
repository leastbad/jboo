import { Controller } from 'stimulus'
import { delegate, abnegate } from 'jquery-events-to-dom-events'

// This controller demonstrates how to set up your modern vanilla JS codebase
// to respond to events coming from legacy jQuery plugins.

// In this case, we're telling the `delegate` method to expect a single
// optional parameter we're calling "beast". It will be available in the
// `detail` object of the captured event.

const eventHandler = event =>
  console.log('birthday received as $birthday from DOM', event.detail.beast)

export default class extends Controller {
  connect () {
    this.delegate = delegate('birthday', ['event', 'beast'])
    document.addEventListener('$birthday', eventHandler)
  }
  disconnect () {
    abnegate('birthday', this.delegate)
    document.removeEventListener('$birthday', eventHandler)
  }
  trigger () {
    window.$(document).trigger('birthday', 666)
  }
}
