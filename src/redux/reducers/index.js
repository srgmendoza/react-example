import {combineReducers} from 'redux'
import { loadHeroesListReducer } from './heroesListReducer'
import { selectHeroReducer } from './heroDetailReducer'

export const rootReducer = combineReducers({
    loadHeroes: loadHeroesListReducer
})