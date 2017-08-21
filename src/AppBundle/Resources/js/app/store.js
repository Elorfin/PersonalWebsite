import {
  createStore as baseCreate,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'

import { reducer as layoutReducer } from 'main/layout/reducer'
import { reducer as aboutReducer } from 'main/app/sections/about/reducer'
import { reducer as competenciesReducer } from 'main/app/sections/competencies/reducer'
import { reducer as experiencesReducer } from 'main/app/sections/experiences/reducer'

const initialState = {
  layout: {
    lang: 'en',
    theme: 'light',
    admin: false,
    isBooting: false,
    isFetching: false
  },
  about: {
    lastUpdate: '04/06/2017',
    firstName: 'Axel',
    lastName: 'Penin',
    birthDate: '1989-08-31',
    hiringStatus: 'active',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem a erat commodo elementum ac eget nulla. Donec porttitor orci id nibh sollicitudin interdum ut et elit. Quisque diam diam, pretium eu eleifend quis, congue at mi. Quisque at enim ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum elit non magna porta commodo. Mauris convallis ut libero id vulputate. Donec eu blandit odio. Nulla mi lorem, fringilla vitae ultricies cursus, ultricies at turpis. Phasellus nibh lorem, auctor et nunc in, dictum fringilla odio. Aliquam erat volutpat. Fusce feugiat urna diam, nec lacinia massa accumsan ac. Integer sagittis laoreet interdum. Suspendisse feugiat pharetra libero, nec suscipit felis auctor id.\n\nEtiam molestie vehicula nibh. Donec a sapien et sem cursus congue vel faucibus tortor. Ut et cursus ligula. In in lorem eleifend, condimentum libero in, vulputate nulla. Praesent quis ipsum sit amet leo tristique facilisis. Duis vitae felis odio. Fusce malesuada elementum eros ut placerat. Donec eros libero, bibendum sed dignissim sit amet, interdum a eros. Nam congue venenatis diam eu tristique. Sed molestie non diam ac rutrum. Mauris ut risus nec mauris bibendum luctus.',
    social: [
      {name: 'Github',         class: 'github',         icon: 'github-alt', url: 'https://github.com/Elorfin'},
      {name: 'Stack Overflow', class: 'stack-overflow', url: 'https://stackoverflow.com/users/379907/elorfin'},
      {name: 'LinkedIn',       class: 'linkedin',       url: 'https://www.linkedin.com/in/axel-penin-32645b70/'}
    ]
  },
  competencies: [
    {
      id: 1,
      name: 'Back-End development',
      color: ['#3c5c7f', '#b4d4f7'],
      children: [
        { id: 10, name: 'Java', color: ['#6484a7'] },
        {
          id: 11,
          name: 'PHP',
          color: ['#6484a7'],
          children: [
            { id: 111, name: 'symfony 2', color: ['#8caccf'] },
            { id: 112, name: 'Silex', color: ['#8caccf'] },
            { id: 113, name: 'Doctrine 2', color: ['#8caccf'] },
            { id: 114, name: 'PHPUnit', color: ['#8caccf'] },
            { id: 115, name: 'composer', color: ['#8caccf'] },
            {
              id: 116,
              name: 'PSR',
              color: ['#8caccf'],
              children: [
                { id: 1161, name: 'PSR-0', color: ['#b4d4f7'] },
                { id: 1161, name: 'PSR-1', color: ['#b4d4f7'] },
                { id: 1161, name: 'PSR-2', color: ['#b4d4f7'] },
                { id: 1161, name: 'PSR-3', color: ['#b4d4f7'] },
                { id: 1161, name: 'PSR-4', color: ['#b4d4f7'] }
              ]
            }
          ]
        },
        {
          id: 12,
          name: 'NodeJS',
          color: ['#6484a7'],
          children: [
            { id: 121, name: 'NPM', color: ['#8caccf'] },
            { id: 121, name: 'yarn', color: ['#8caccf'] },
            { id: 121, name: 'Karma', color: ['#8caccf'] },
          ]
        },
        {
          id: 13,
          name: 'Database',
          color: ['#6484a7'],
          children: [
            {
              id: 131,
              name: 'SQL',
              color: ['#8caccf'],
              children: [
                { id: 1311, name: 'MySQL', color: ['#b4d4f7'] },
                { id: 1312, name: 'PostgreSQL', color: ['#b4d4f7'] }
              ]
            },
            { id: 132, name: 'MongoDB', color: ['#8caccf'] }
          ]
        }
      ]
    },

    {
      id: 2,
      name: 'Front-End development',
      color: ['#3c7f5c', '#b4f7d4'],
      children: [
        {
          id: 21,
          name: 'JavaScript',
          color: ['#64a784'],
          children: [
            { id: 211, name: 'React', color: ['#8ccfac'] },
            { id: 212, name: 'Redux', color: ['#8ccfac'] },
            { id: 213, name: 'Angular 1', color: ['#8ccfac'] },
            { id: 214, name: 'D3', color: ['#8ccfac'] },
            { id: 215, name: 'ThreeJS', color: ['#8ccfac'] }
          ]
        },
        {
          id: 22,
          name: 'HTML',
          color: ['#64a784'],
          children: [
            { id: 221, name: 'HTML 5', color: ['#8ccfac'] },
            { id: 222, name: 'Twig', color: ['#8ccfac'] }
          ]
        },
        {
          id: 23,
          name: 'CSS',
          color: ['#64a784'],
          children: [
            { id: 231, name: 'LESS', color: ['#8ccfac'] },
            { id: 232, name: 'Sass', color: ['#8ccfac'] },
            { id: 233, name: 'Bootstrap', color: ['#8ccfac'] }
          ]
        },
        { id: 24, name: 'SVG', color: ['#64a784'] },
        { id: 25, name: 'WCAG', color: ['#64a784'] }
      ]
    },

    {
      id: 3,
      name: 'Middleware',
      color: ['#5c3c7f', '#d4b4f7'],
      children: [
        { id: 31, name: 'RabbitMQ', color: ['#8464a7'] },
        { id: 32, name: 'Talend Open Studio', color: ['#8464a7'] }
      ]
    },

    {
      id: 4,
      name: 'Software engineering',
      color: ['#7f3c5c', '#f7b4d4'],
      children: [
        { id: 41, name: 'Unit Testing', color: ['#a76484'] },
        { id: 41, name: 'External API integration', color: ['#a76484'] },
        {
          id: 42,
          name: 'Architecture',
          color: ['#a76484'],
          children: [
            { id: 421, name: 'MVC', color: ['#cf8cac'] },
            { id: 422, name: 'MVVM', color: ['#cf8cac'] },
            { id: 423, name: 'REST', color: ['#cf8cac'] }
          ]
        },
        {
          id: 43,
          name: 'Methodology',
          color: ['#a76484'],
          children: [
            { id: 431, name: 'SCRUM', color: ['#cf8cac'] },
            { id: 432, name: 'Test Driven Development', color: ['#cf8cac'] }
          ]
        },
        {
          id: 44,
          name: 'Continuous Integration',
          color: ['#a76484'],
          children: [
            { id: 441, name: 'Travis CI', color: ['#cf8cac'] },
            { id: 442, name: 'Scrutinizer', color: ['#cf8cac'] }
          ]
        },
        {
          id: 44,
          name: 'Modelization',
          color: ['#a76484'],
          children: [
            { id: 441, name: 'UML', color: ['#cf8cac'] },
            { id: 442, name: 'Merise', color: ['#cf8cac'] }
          ]
        }
      ]
    },

    {
      id: 5,
      name: 'System & Network',
      color: ['#7f5c3c', '#f7d4b4'],
      children: [
        { id: 51, name: 'Apache', color: ['#a78464'] },
        { id: 52, name: 'Nginx', color: ['#a78464'] },
        {
          id: 53,
          name: 'OS',
          color: ['#a78464'],
          children: [
            { id: 531, name: 'Windows', color: ['#cfac8c'] },
            { id: 532, name: 'Linux', color: ['#cfac8c'] },
            { id: 533, name: 'Mac', color: ['#cfac8c'] }
          ]
        }
      ]
    },

    {
      id: 6,
      name: 'Software',
      color: ['#F5A700', '#FFECC2'],
      children: [
        { id: 61, name: 'Adobe Photoshop', color: ['#FFC547'] },
        { id: 62, name: 'The Gimp', color: ['#FFC547'] },
        { id: 63, name: 'Adobe Illustrator', color: ['#FFC547'] },
        { id: 63, name: 'Blender', color: ['#FFC547'] },
        { id: 63, name: 'UDK', color: ['#FFC547'] },
        {
          id: 64,
          name: 'IDE',
          color: ['#FFC547'],
          children: [
            { id: 641, name: 'PHP Storm', color: ['#FFD885'] },
            { id: 642, name: 'Eclipse', color: ['#FFD885'] },
            { id: 643, name: 'Netbeans', color: ['#FFD885'] }
          ]
        }
      ]
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
      layout: layoutReducer,
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
