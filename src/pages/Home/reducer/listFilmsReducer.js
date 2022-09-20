const initialState = {
    listFilms: []
}

const listFilmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_FILMS": {
            state.listFilms = action.payload

            return {...state}
        }

        default:
            return { ...state };
    }
}

export default listFilmsReducer;