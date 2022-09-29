import getFilmsService from '../../../services/getFilmsService'
import cinemaSystem from '../../../services/cinemaSystem'

export const fetchFilms = () => {
    return dispatch => {
        getFilmsService.get()
        .then(result => {
            dispatch({
                type: "LIST_FILMS",
                payload: result.data.content
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const fetchSystem = () => {
    return dispatch => {
        cinemaSystem.get()
        .then(result => {
            dispatch({
                type: "LIST_SYSTEM",
                payload: result.data.content
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}