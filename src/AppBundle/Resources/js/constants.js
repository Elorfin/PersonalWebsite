
import {About} from './about/components/main.jsx'
import {Competencies} from './competencies/components/main.jsx'
import {Contact} from './contact/components/main.jsx'
import {Experiences} from './experiences/components/main.jsx'

const sections = [
  {
    icon: 'info-circle',
    label: 'About',
    target: '/about',
    colors: ['#546a77', ''],
    default: true,
    component: About
  },
  {
    icon: 'certificate',
    label: 'Competencies',
    target: '/competencies',
    colors: ['#6a7754', ''],
    component: Competencies
  },
  {
    icon: 'suitcase',
    label: 'Experiences',
    target: '/experience',
    colors: ['#6a5477', ''],
    component: Experiences
  },
  {
    icon: 'envelope',
    label: 'Contact',
    target: '/contact',
    colors: ['#776a54', ''],
    component: Contact
  }
]

export {
  sections
}
