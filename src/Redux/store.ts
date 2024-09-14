import { configureStore } from "@reduxjs/toolkit";
import profileSlice from './profileSclice'

const store =  configureStore(
    {
        reducer:{
            profile:profileSlice
        }
    }
)

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;