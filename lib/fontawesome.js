import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faChevronDown,
  faX,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons' // Existing icons
import {
  faTwitter,
  faGooglePlay,
  faApple,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons' // New brand icons

// Add icons to the library
library.add(
  faBars,
  faTwitter,
  faGooglePlay,
  faApple,
  faInstagram,
  faFacebook,
  faChevronDown,
  faX,
  faEyeSlash
)
