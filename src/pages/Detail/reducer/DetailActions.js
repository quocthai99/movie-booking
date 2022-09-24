import getDetailFilmService from '../../../services/getDetailFilmService'

export const fetchDetailFilm = (id) => {
    return dispatch => {

        getDetailFilmService.get(id)
        .then(result => {
            dispatch({
                type: "DETAIL_SUCCESS",
                payload: result.data.content
            })
        })
    }
}