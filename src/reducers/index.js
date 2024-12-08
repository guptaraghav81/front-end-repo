import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "../Slices/authSlice";
import profileSlice from "../Slices/profileSlice";
import cartSlice from "../Slices/cartSlice";
import courseReducer from "../Slices/courseSlice"
import viewCourseSlice from "../Slices/viewCourseSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    profile: profileSlice,
    cart: cartSlice,
    course: courseReducer,
    viewCourse: viewCourseSlice,
})

export default rootReducer;