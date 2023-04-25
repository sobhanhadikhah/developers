import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { PostsReducer } from "../features/posts/postsSlice";


export const store = configureStore({
    reducer:{
        weblog:PostsReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})