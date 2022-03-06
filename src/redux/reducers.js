import {combineReducers} from 'redux'
import * as actions from './actions'

let initialState = {
    page: 1,
    loading: true,
    hasErrors: false,
    heroes: [],
    selectedHero: {
        hero: {}
    }
}

let selectHeroReducer = (initState = initialState, action) => {
    switch(action.type) {
        case 'SELECT_HERO':
            return action.hero
        case 'UNSELECT_HERO':
            return initState
        default:
            return initState
    }
}



let loadHeroesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_HEROES: 
            return {...state, 
                loading: true}
        case actions.GET_HEROES_SUCCESS :
            return { 
                 heroes: action.payload,
                 loading: false, 
                 hasErrors: false }
        case actions.GET_HEROES_FAILURE :
            return { ...state, 
                loading: false, 
                hasErrors: true }
        default:
            return state
    }
}

let rootReducer = combineReducers({
    loadHeroes: loadHeroesListReducer
})
export default rootReducer