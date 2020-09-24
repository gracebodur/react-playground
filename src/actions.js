import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => {
    console.log(text)
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text // sending what ever data is sent or simply what the user sent
    }
}