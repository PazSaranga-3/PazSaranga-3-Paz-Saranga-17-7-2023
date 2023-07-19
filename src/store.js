import {configureStore} from '@reduxjs/toolkit'
import reducerCitysArry from './reducerCitysArry'
import reducerCity from './reducerCity'


const reducer = {reducerCitysArry,reducerCity}
const store = configureStore({reducer})

export default store;