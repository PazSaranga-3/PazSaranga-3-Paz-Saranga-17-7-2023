import {configureStore} from '@reduxjs/toolkit'
import reducerCitysArry from './reducerCitysArry'
import reducerCity from './reducerCity'
import reducerTemp from './reducerTemp'


const reducer = {reducerCitysArry,reducerCity,reducerTemp}
const store = configureStore({reducer})

export default store;