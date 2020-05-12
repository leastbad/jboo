import { Controller } from 'stimulus'
import { delegate, abnegate } from 'jquery-events-to-dom-events'

const eventHandler = (_, detail) =>
  console.log('$wedding received as wedding by jQuery', detail)

// This controller demonstrates how a legacy jQuery script can be
// wired up to receive clones of specified DOM events.

// Ideally, this is just a crutch to use while you transition
// legacy applications to use modern tools like webpack. It is
// challenging to find equivalent components when you're used
// to working in a certain way, and sometimes you have to make
// jQuery plugins work in a webpack context. Stimulus provides
// an exceptionally powerful tool to wrap those older plugins
// and make them work in webpack, cooperating with Turbolinks.

// You can find more guidance at:
// https://leastbad.com/mutation-first-development

export default class extends Controller {
  connect () {
    this.delegate = delegate('$wedding')
    window.$(document).on('wedding', eventHandler)
  }
  disconnect () {
    abnegate('$wedding', this.delegate)
    window.$(document).off('wedding', eventHandler)
  }
  trigger () {
    document.dispatchEvent(new CustomEvent('$wedding', { detail: 666 }))
  }
}
