import * as actions from '../actions/heroesListActions'

let initialState = {
    page: 1,
    loading: true,
    hasErrors: false,
    heroes: [],
}


export const loadHeroesListReducer = (state = initialState, action) => {
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
