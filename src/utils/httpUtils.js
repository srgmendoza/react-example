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

export default getQuery