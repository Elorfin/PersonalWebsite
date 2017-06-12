
import { Experiences }  from 'main/app/sections/experiences/components/main.jsx'

export const EXPERIENCE_TYPE_JOB     = 'job'
export const EXPERIENCE_TYPE_STUDIES = 'studies'
export const EXPERIENCE_TYPE_PROJECT = 'project'
export const EXPERIENCE_TYPE_DIPLOMA = 'diploma'

export const experienceTypes = {
  [EXPERIENCE_TYPE_JOB]: {
    icon: 'industry',
    label: 'Job'
  },
  [EXPERIENCE_TYPE_STUDIES]: {
    icon: 'graduation-cap',
    label: 'Studies'
  },
  [EXPERIENCE_TYPE_PROJECT]: {
    icon: 'book',
    label: 'Project'
  },
  [EXPERIENCE_TYPE_DIPLOMA]: {
    icon: 'trophy',
    label: 'Diploma'
  }
}

export const SECTION_EXPERIENCES = {
  icon: 'suitcase',
  label: 'Experiences',
  target: '/experience',
  component: Experiences
}
