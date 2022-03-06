import { baseUrl } from "../../utils/constants"
import getQuery from "../../utils/httpUtils"

export const GET_HEROES = 'GET_HEROES'
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS'
export const GET_HEROES_FAILURE = 'GET_HEROES_FAILURE'


let pageNumber = 0
export const fetchHeroesList = (pageNumber) => {
    return dispatch => {
        dispatch(getHeroes())

        return fetch(`${baseUrl}/v1/public/characters${getQuery(pageNumber)}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch(getHeroesSuccess(data.data.results))
        })
        .catch(
            dispatch(getHeroesFailure())
        )
    }
}

export const getHeroes = () => ({ type: GET_HEROES })
export const getHeroesSuccess = heroes => ({
  type: GET_HEROES_SUCCESS,
  payload: heroes,
  page: pageNumber++
})
export const getHeroesFailure = () => ({ type: GET_HEROES_FAILURE })
