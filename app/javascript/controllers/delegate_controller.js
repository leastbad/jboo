import { Controller } from 'stimulus'
import { delegate, abnegate } from 'jquery-events-to-dom-events'

const DOMEventHandler = () => console.log('$test event received from jQuery')

export default class extends Controller {
  connect () {
    this.eventDelegate = delegate('test')
    document.addEventListener('$test', DOMEventHandler)
  }
  disconnect () {
    abnegate('test', this.eventDelegate)
    document.removeEventListener('$test', DOMEventHandler)
  }
  triggerjQ () {
    $(document).trigger('test')
  }
}
