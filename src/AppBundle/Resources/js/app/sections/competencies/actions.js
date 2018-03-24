import {makeActionCreator} from 'main/utils/redux'

export const OPEN_COMPETENCY  = 'OPEN_COMPETENCY'
export const CLOSE_COMPETENCY = 'CLOSE_COMPETENCY'


export const actions = {}

actions.openCompetency = makeActionCreator(OPEN_COMPETENCY, 'competencyId')
actions.closeCompetency = makeActionCreator(CLOSE_COMPETENCY)
