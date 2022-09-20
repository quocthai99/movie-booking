import {combineReducers} from 'redux'

import listBannerReducer from '../../layouts/components/CarouselHeader/reducer/listBannerReducer'

const rootReducer = combineReducers({
    listBannerReducer,
})

export default rootReducer