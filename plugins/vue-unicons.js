import Vue from 'vue'
import Unicon from 'vue-unicons'
import {
  uniDirectionMonochrome,
  uniTimesSquare,
  uniCheckCircleMonochrome,
  uniPhone,
  uniFastMail,
  uniMapMarkerAlt,
  uniTwitter,
  uniFacebookF,
  uniLinkedin
} from 'vue-unicons/src/icons'
import { myCustomIcon } from './custom-icons'

Unicon.add([
  uniDirectionMonochrome,
  uniTimesSquare,
  uniCheckCircleMonochrome,
  uniPhone,
  uniFastMail,
  uniMapMarkerAlt,
  uniTwitter,
  uniFacebookF,
  uniLinkedin,
  myCustomIcon
])
Vue.use(Unicon)
