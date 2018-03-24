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
  competencies: {
    current: null,
    list: [
      {
        id: 1,
        name: 'Back-End development',
        color: ['#3c5c7f', '#b4d4f7'],
        icon: '\uf233',
        children: [
          { id: 10, name: 'Java', color: ['#6484a7'] },
          {
            id: 11,
            name: 'PHP',
            color: ['#6484a7'],
            children: [
              {
                id: 111,
                name: 'symfony',
                color: ['#8caccf'],
                children: [
                  { id: 1161, name: '1', color: ['#b4d4f7'], version: true },
                  { id: 1161, name: '2', color: ['#b4d4f7'], version: true }
                ]
              },
              { id: 112, name: 'Silex', color: ['#8caccf'] },
              { id: 113, name: 'Doctrine 2', color: ['#8caccf'] },
              { id: 114, name: 'PHPUnit', color: ['#8caccf'] },
              { id: 115, name: 'composer', color: ['#8caccf'] },
              {
                id: 116,
                name: 'PSR',
                color: ['#8caccf'],
                children: [
                  { id: 1161, name: '0', color: ['#b4d4f7'], version: true },
                  { id: 1161, name: '1', color: ['#b4d4f7'], version: true },
                  { id: 1161, name: '2', color: ['#b4d4f7'], version: true },
                  { id: 1161, name: '3', color: ['#b4d4f7'], version: true },
                  { id: 1161, name: '4', color: ['#b4d4f7'], version: true }
                ]
              },
              { id: 117, name: '4', color: ['#8caccf'], version: true },
              { id: 118, name: '5', color: ['#8caccf'], version: true },
              { id: 119, name: '7', color: ['#8caccf'], version: true }
            ]
          },
          {
            id: 12,
            name: 'NodeJS',
            color: ['#6484a7'],
            children: [
              { id: 121, name: 'NPM', color: ['#8caccf'] },
              { id: 122, name: 'yarn', color: ['#8caccf'] },
              { id: 123, name: 'Grunt', color: ['#8caccf'] },
              { id: 124, name: 'Karma', color: ['#8caccf'] },
              { id: 124, name: 'Babel', color: ['#8caccf'] },
              {
                id: 125,
                name: 'Webpack',
                color: ['#8caccf'],
                children: [
                  {id: 1251, name: '1', color: ['#b4d4f7'], version: true},
                  {id: 1252, name: '2', color: ['#b4d4f7'], version: true}
                ]
              }
            ]
          },
          {
            id: 13,
            name: 'Database',
            color: ['#6484a7'],
            icon: '\uf1c0',
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
        icon: '\uf26c',
        children: [
          {
            id: 21,
            name: 'JavaScript',
            color: ['#64a784'],
            children: [
              { id: 211, name: 'React', color: ['#8ccfac'] },
              { id: 212, name: 'Redux', color: ['#8ccfac'] },
              {
                id: 213,
                name: 'Angular',
                color: ['#8ccfac'],
                children: [
                  {id: 2131, name: '1', color: ['#b4f7d4'], version: true},
                  {id: 2132, name: '2', color: ['#b4f7d4'], version: true}
                ]
              },
              { id: 214, name: 'D3', color: ['#8ccfac'] },
              { id: 215, name: 'ThreeJS', color: ['#8ccfac'] },
              {
                id: 216,
                name: 'ECMAScript',
                color: ['#8ccfac'],
                children: [
                  {id: 2131, name: '5', color: ['#b4f7d4'], version: true},
                  {id: 2132, name: '6', color: ['#b4f7d4'], version: true}
                ]
              },
            ]
          },
          {
            id: 22,
            name: 'HTML',
            color: ['#64a784'],
            icon: '\uf121',
            children: [
              { id: 221, name: 'HTML 5', color: ['#8ccfac'], icon: '\uf13b' },
              { id: 222, name: 'Twig', color: ['#8ccfac'] }
            ]
          },
          {
            id: 23,
            name: 'CSS',
            color: ['#64a784'],
            icon: '\uf13c',
            children: [
              { id: 231, name: 'LESS', color: ['#8ccfac'] },
              { id: 232, name: 'Sass', color: ['#8ccfac'] },
              {
                id: 233,
                name: 'Bootstrap',
                color: ['#8ccfac'] ,
                children: [
                  {id: 2331, name: '3', color: ['#b4f7d4'], version: true},
                  {id: 2332, name: '4', color: ['#b4f7d4'], version: true}
                ]
              }
            ]
          },
          { id: 24, name: 'SVG', color: ['#64a784'] },
          { id: 25, name: 'WCAG', color: ['#64a784'] }
        ]
      },

      {
        id: 4,
        name: 'Software engineering',
        color: ['#7f3c5c', '#f7b4d4'],
        icon: '\uf0eb',
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
            icon: '\uf073',
            children: [
              { id: 431, name: 'SCRUM', color: ['#cf8cac'] },
              { id: 432, name: 'Test Driven Development', color: ['#cf8cac'] }
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
        icon: '\uf0ac',
        children: [
          { id: 51, name: 'Apache', color: ['#a78464'] },
          { id: 52, name: 'Nginx', color: ['#a78464'] },
          {
            id: 53,
            name: 'OS',
            color: ['#a78464'],
            icon: '\uf108',
            children: [
              { id: 531, name: 'Windows', color: ['#cfac8c'], icon: '\uf17a' },
              { id: 532, name: 'Linux', color: ['#cfac8c'], icon: '\uf17c' },
              { id: 533, name: 'Mac', color: ['#cfac8c'], icon: '\uf179' }
            ]
          }
        ]
      },

      {
        id: 6,
        name: 'Software & Tools',
        color: ['#5c3c7f', '#d4b4f7'],
        icon: '\uf0ad',
        children: [
          { id: 61, name: 'Adobe Photoshop', color: ['#8464a7'] },
          { id: 62, name: 'The Gimp', color: ['#8464a7'] },
          { id: 63, name: 'Adobe Illustrator', color: ['#8464a7'] },
          { id: 63, name: 'Blender', color: ['#8464a7'] },
          { id: 63, name: 'UDK', color: ['#8464a7'] },
          {
            id: 64,
            name: 'IDE',
            color: ['#8464a7'],
            children: [
              { id: 641, name: 'PHP Storm', color: ['#ac8ccf'] },
              { id: 642, name: 'Eclipse', color: ['#ac8ccf'] },
              { id: 643, name: 'Netbeans', color: ['#ac8ccf'] }
            ]
          },
          { id: 65, name: 'Talend Open Studio', color: ['#8464a7'] },
          {
            id: 66,
            name: 'Git',
            color: ['#8464a7'],
            icon: '\uf1d3',
            children: [
              { id: 661, name: 'GitHub', color: ['#ac8ccf'], icon: '\uf113' }
            ]
          },
          {
            id: 67,
            name: 'Continuous Integration', // tools ?
            color: ['#8464a7'],
            children: [
              { id: 671, name: 'Travis CI', color: ['#ac8ccf'] },
              { id: 672, name: 'Scrutinizer', color: ['#ac8ccf'] }
            ]
          }
        ]
      }
    ]
  },
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
