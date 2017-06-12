import { createSelector } from 'reselect'

const about = state => state.about
const experiences = state => state.experiences
const competencies = state => state.competencies

const social = createSelector(
  [about],
  (about) => about.social
)

export const select = {
  about,
  social,
  experiences,
  competencies
}
