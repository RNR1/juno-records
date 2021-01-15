import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGift,
  faQuestionCircle,
  faUserAlt,
  faShoppingCart,
  faSearch,
  faCaretDown,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import {
  faWeebly,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(
  faBars,
  faCaretDown,
  faGift,
  faQuestionCircle,
  faUserAlt,
  faShoppingCart,
  faSearch,
  faWeebly,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSoundcloud
)
