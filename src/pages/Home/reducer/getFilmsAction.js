import getFilmsService from '../../../services/getFilmsService'

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