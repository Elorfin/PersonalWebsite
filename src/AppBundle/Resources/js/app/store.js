import {
  createStore as baseCreate,
  combineReducers
} from 'redux'

import { reducer as aboutReducer } from 'main/app/sections/about/reducer'
import { reducer as competenciesReducer } from 'main/app/sections/competencies/reducer'
import { reducer as experiencesReducer } from 'main/app/sections/experiences/reducer'

const initialState = {
  /*ui: {
    lang: 'en',
    theme: 'light',
    admin: false,
    isBooting: false,
    isFetching: false
  },*/
  about: {
    firstName: 'Axel',
    lastName: 'Penin',
    birthDate: '1989-08-31',
    description: '',
    social: [
      {name: 'Github', icon: 'github', url: 'https://github.com/Elorfin'},
      {name: 'Stack Overflow', icon: 'stack-overflow', url: 'https://stackoverflow.com/users/379907/elorfin'},
      {name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/axel-penin-32645b70/'}
    ]
  },
  competencies: [
    {
      id: 1,
      name: 'PHP',
      description: '',
      mastery: 5,
      versions: ['4', '5', '7'], // for techno
      related: []
    }
  ],
  experiences: [
    {
      type: 'project',
      name: 'Claroline',
      description: '',
      competencies: [],
      details: [
        'Advanced theme feature',
        'Ergonomy',
        ''
      ],
      links: [

      ]
    },
    {
      type: 'diploma',
      name: 'DUT software engineering',
      competencies: [],
      dates: ['2011']
    },
    {
      type: 'studies',
      name: 'IUT',
      description: '',
      competencies: [],
      projects: [],
      dates: ['2009-09-01', '2011-09-01']
    },
    {
      type: 'job',
      name: '',
      dates: ['2009-09-01', '2011-09-01'],
      competencies: [],
      projects: [],
      details: [
        'Advanced theme feature',
        'Ergonomy',
        ''
      ]
    }
  ]
}

export function createStore() {
  return baseCreate(
    combineReducers({
      about: aboutReducer,
      competencies: competenciesReducer,
      experiences: experiencesReducer
    }),
    initialState
  )
}
