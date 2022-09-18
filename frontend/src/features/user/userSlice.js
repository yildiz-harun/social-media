import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            //   state.value += 1
        },
        removeUser: (state) => {
            state.value = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer