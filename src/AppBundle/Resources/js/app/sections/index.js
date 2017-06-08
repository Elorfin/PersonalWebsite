
import { About } from 'main/app/sections/about/components/main.jsx'
import { Competencies } from 'main/app/sections/competencies/components/main.jsx'
import { Contact } from 'main/app/sections/contact/components/main.jsx'
import { Experiences } from 'main/app/sections/experiences/components/main.jsx'

const sections = [
  {
    icon: 'info-circle',
    label: 'About',
    target: '/about',
    default: true,
    component: About
  },
  {
    icon: 'certificate',
    label: 'Competencies',
    target: '/competencies',
    component: Competencies
  },
  {
    icon: 'suitcase',
    label: 'Experiences',
    target: '/experience',
    component: Experiences
  },
  {
    icon: 'envelope',
    label: 'Contact',
    target: '/contact',
    component: Contact
  }
]

export {
  sections
}
