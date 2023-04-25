import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    user:[],
    auth: localStorage.getItem("isAuth") ? JSON.parse(localStorage.getItem("isAuth")) :false

}

export const postsReducer = createSlice({
    name:"posts",
    initialState:initialState,
    reducers:{
        addPosts: (state,action) =>{
            state.posts.push(...action.payload)
        },
        fetchUser: (state,action)=>{
            const {user} = action.payload
            state.user = user
        }
    }

    
})

export const {addPosts,fetchUser} = postsReducer.actions
export const PostsReducer = postsReducer.reducer