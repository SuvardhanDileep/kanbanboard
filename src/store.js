import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './DataManipulate/DataReducer';
const store = configureStore({
    reducer: {
        DataReducer, SelectDataReducer
    }
})
export default store;