import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.value = action.payload
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            //   state.value += 1
        },
        addPost: (state, action) => {
            state.value = [action.payload, ...state.value]
        },
        deletePost: (state, action) => {
            //state.value = state.value.filter((post) => { return post._id !== action.payload._id })
            state.value = state.value.filter((post) => {
                // if (post._id === action.payload._id) {
                //     console.log(post._id);
                // }
                return post._id !== action.payload._id
            })
        },
        updatePost: (state, action) => {
            state.value = state.value.map((post) => {
                if (post._id === action.payload._id) {
                    return {
                        value: action.payload.value, _id: action.payload._id,
                        createdAt: post.createdAt, updatedAt: post.updatedAt, __v: post.__v
                    }
                    //return { value: action.payload.value, _id: post._id }
                }
                else {
                    return post
                }
            })
            //state.todos = state.todos.map((todo) => { ((todo.id === action.payload.id) ? return { todo.content : "111111111", todo.id: todo.id } : return todo))}
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPost, addPost, deletePost, updatePost } = postSlice.actions

export default postSlice.reducer