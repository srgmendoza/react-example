import { SELECT_HERO, SELECT_HERO_SUCCESS, SELECT_FAILURE } from "../actions/heroDetailActions"


let initialState = {
    loading: true,
    hasErrors: false,
    selectedHero: {
        hero: {}
    }
}

export const selectHeroReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_HERO:
            return action.hero
        case SELECT_HERO_SUCCESS:
            return {
                loading: false,
                hasErrors: false,
                selectedHero: action.payload
            }
        case SELECT_FAILURE:
            return { ...state, 
                loading: false, 
                hasErrors: true }
        default:
            return state
    }
}