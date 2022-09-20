import carouselService from '../../../../services/carouselService'

export const fetchBanner = () => {
    return dispatch => {

        carouselService.get()
            .then(result => {
                dispatch({
                    type: "LIST_BANNER",
                    payload: result.data.content
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}