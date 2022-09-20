import {combineReducers} from 'redux'

import listBannerReducer from '../../layouts/components/CarouselHeader/reducer/listBannerReducer'
import listFilmsReducer from '../../pages/Home/reducer/listFilmsReducer'

const rootReducer = combineReducers({
    listBannerReducer,
    listFilmsReducer,
})

export default rootReducer