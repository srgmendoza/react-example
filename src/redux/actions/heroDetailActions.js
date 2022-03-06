import { getQueryForDetail } from "../../utils/httpUtils"
import { baseUrl } from "../../utils/constants"

export const SELECT_HERO = 'SELECT_HERO'
export const SELECT_HERO_SUCCESS = 'SELECT_HERO_SUCCESS'
export const UNSELECT_HERO = 'UNSELECT_HERO'
export const UNSELECT_HERO_SUCCESS = 'UNSELECT_HERO'
export const SELECT_FAILURE = 'SELECT_FAILURE'
export const UNSELECT_FAILURE = 'UNSELECT_FAILURE'


export const fetchHeroData = (heroId) => {
    return dispatch => {
        dispatch(selectHero())

        return fetch(`${baseUrl}/v1/public/characters${getQueryForDetail(heroId)}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch(onSelectHeroSuccess(data))
        })
        .catch(dispatch(onSelectHeroFailure))
    }
}

export const selectHero = () => {
    return {
        type: SELECT_HERO
    }
}
export const onSelectHeroSuccess = (hero) => {
    return {
        type: SELECT_HERO_SUCCESS,
        payload: hero
    }
}
export const onSelectHeroFailure = () => {
    return {
        type: SELECT_FAILURE
    }
} 