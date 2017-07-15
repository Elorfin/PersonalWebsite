import { createSelector } from 'reselect'

const about = state => state.about
const experiences = state => state.experiences
const competencies = state => state.competencies

const lastSiteUpdate = createSelector(
  [about],
  (about) => about.lastUpdate
)

const social = createSelector(
  [about],
  (about) => about.social
)

const description = createSelector(
  [about],
  (about) => about.description
)

const hiringStatus = createSelector(
  [about],
  (about) => about.hiringStatus
)

export const select = {
  about,
  lastSiteUpdate,
  description,
  hiringStatus,
  social,
  experiences,
  competencies
}
