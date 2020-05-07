import 'stylesheets/application.scss'
import * as Turbolinks from 'turbolinks'
import Rails from '@rails/ujs'
import * as ActiveStorage from '@rails/activestorage'
import 'controllers'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require('jquery')

import "controllers"
