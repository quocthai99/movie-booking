const initialState = {
    listFilms: [],
    nowShowing: true,
    commingSoon: true,
    filmDefault: []
}

const listFilmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_FILMS": {
            state.listFilms = action.payload
            state.filmDefault = [...state.listFilms]
            return {...state}
        }
        case "NOW_SHOWING": {
            state.listFilms = state.filmDefault.filter(film => film.dangChieu === state.nowShowing)

            return {...state}
        }
        case "COMMING_SOON": {
            state.listFilms = state.filmDefault.filter(film => film.sapChieu === state.commingSoon)

            return {...state}
        }

        default:
            return { ...state };
    }
}

export default listFilmsReducer;