import md5 from "blueimp-md5";
import { MAX_ITEMS, PRIVATE_KEY, PUBLIC_KEY } from "./constants";

export function setToM5(value) {
    let result = md5(value)
    return result
}

function getQuery(actualPage) {

    let now = Date.now()
    let hash = setToM5(now + PRIVATE_KEY + PUBLIC_KEY)
    let offset = MAX_ITEMS
    if(actualPage == 0) offset = actualPage * MAX_ITEMS

    return `?limit=${MAX_ITEMS}&offset=${offset}&ts=${now}&apikey=${PUBLIC_KEY}&hash=${hash}`

}

export const getQueryForDetail = (heroId) => {
    let now = Date.now()
    let hash = setToM5(now + PRIVATE_KEY + PUBLIC_KEY)

    return `/${heroId}?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${now}&limit=${MAX_ITEMS}`
}

export const getImageUrl = (path,extension) => {
    return `${path}/standard_medium.${extension}`
}

export default getQuery