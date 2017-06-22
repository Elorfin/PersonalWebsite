import {
  createStore as baseCreate,
  combineReducers,
  applyMiddleware,
  compose
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
      {name: 'Github',         icon: 'github',         url: 'https://github.com/Elorfin'},
      {name: 'Stack Overflow', icon: 'stack-overflow', url: 'https://stackoverflow.com/users/379907/elorfin'},
      {name: 'LinkedIn',       icon: 'linkedin',       url: 'https://www.linkedin.com/in/axel-penin-32645b70/'}
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
      id: 1,
      type: 'project',
      name: 'Claroline',
      image: 'uploads/claroline.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem a erat commodo elementum ac eget nulla. Donec porttitor orci id nibh sollicitudin interdum ut et elit. Quisque diam diam, pretium eu eleifend quis, congue at mi.',
      competencies: [
        {name: 'PHP'}
      ],
      details: [
        'Advanced theme feature',
        'Ergonomy',
        ''
      ],
      links: [

      ],
      location: ''
    },
    {
      id: 5,
      type: 'job',
      name: 'Web dev at InnovaLangues',
      image: 'uploads/stendhal.png',
      dates: ['2009-09-01', '2011-09-01'],
      competencies: [],
      projects: [],
      location: ''
    },
    {
      id: 4,
      type: 'job',
      name: 'Web dev at Captivea',
      image: 'uploads/captivea.png',
      dates: ['2009-09-01', '2011-09-01'],
      competencies: [],
      projects: [],
      details: [
        'Advanced theme feature',
        'Ergonomy',
        ''
      ],
      location: ''
    },
    {
      id: 2,
      type: 'diploma',
      name: 'DUT software engineering',
      competencies: [],
      dates: ['2011'],
      location: ''
    },
    {
      id: 3,
      type: 'studies',
      name: 'IUT',
      image: 'uploads/upmf.png',
      description: 'Aliquam erat volutpat. Fusce feugiat urna diam, nec lacinia massa accumsan ac. Integer sagittis laoreet interdum. Suspendisse feugiat pharetra libero, nec suscipit felis auctor id.',
      competencies: [],
      projects: [],
      dates: ['2009-09-01', '2011-09-01'],
      location: ''
    }
  ]
}

export function createStore(middleware = []) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return baseCreate(
    combineReducers({
      about: aboutReducer,
      competencies: competenciesReducer,
      experiences: experiencesReducer
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}
