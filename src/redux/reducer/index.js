import {combineReducers} from 'redux'

import listBannerReducer from '../../layouts/components/CarouselHeader/reducer/listBannerReducer'
import listFilmsReducer from '../../pages/Home/reducer/listFilmsReducer'
import detailReducer from '../../pages/Detail/reducer/DetailReducer'

const rootReducer = combineReducers({
    listBannerReducer,
    listFilmsReducer,
    detailReducer,
})

export default rootReducer