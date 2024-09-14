import { configureStore } from "@reduxjs/toolkit";
import {profileSlice} from './profileSclice'

const store =  configureStore(
    {
        reducer:{
            profileSlice
        }
    }
)

export default store;