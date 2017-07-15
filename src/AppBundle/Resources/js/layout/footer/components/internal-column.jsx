import React from 'react'
import { NavLink } from 'react-router-dom'

import { sections } from 'main/app/sections/index'
import { FooterColumn } from 'main/layout/footer/components/footer-column.jsx'

const InternalColumn = () =>
  <FooterColumn title="Internal links">
    <ul>
      {sections.map((section, index) =>
        <li key={index}>
          <NavLink activeClassName="active" to={section.target}>
            <span className={`fa fa-fw fa-${section.icon}`} />
            {section.label}
          </NavLink>
        </li>
      )}
    </ul>

    <ul className="admin-links">
      <li>
        <a href="">
          <span className="fa fa-fw fa-unlock-alt" />
          Connexion
        </a>
      </li>
    </ul>
  </FooterColumn>

export {
  InternalColumn
}
