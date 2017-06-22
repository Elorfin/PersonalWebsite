import React from 'react'
import { PropTypes as T } from 'prop-types'
import { connect } from 'react-redux'

import { select } from 'main/app/selectors'

import { experienceTypes } from 'main/app/sections/experiences/index'

const ExperienceSection = props =>
  <section className="container app-section experiences">
    <h2 className="sr-only">Experiences</h2>

    {props.experiences.map(experience =>
      <section key={experience.id} className="experience-card content-panel content-panel-icon">
        <span className={`panel-icon fa fa-fw fa-${experienceTypes[experience.type].icon}`} />

        <div className="experience-content">
          <h3>{experience.name}</h3>

          {experience.description &&
            <p>{experience.description}</p>
          }

          {experience.details &&
            <ul className="experience-details">
              {experience.details.map((detail, index) =>
                <li key={index}>{detail}</li>
              )}
            </ul>
          }
        </div>

        {experience.image &&
          <div className="experience-img">
            <img  src={experience.image} alt="experience image" />
          </div>
        }
      </section>
    )}
  </section>

ExperienceSection.propTypes = {
  experiences: T.arrayOf(T.shape({
    id: T.number.isRequired,
    name: T.string.isRequired,
    type: T.oneOf(['job', 'studies', 'project', 'diploma']).isRequired,
    description: T.string,
    details: T.arrayOf(T.string)
  })).isRequired
}

const mapStateToProps = (state) => {
  return {
    experiences: select.experiences(state)
  }
}

const ExperiencesContainer = connect(mapStateToProps)(ExperienceSection)

export {
  ExperiencesContainer as Experiences
}
