import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setUserData: (state, { payload }) => {
            state.userData = payload
        }
    }
})

export const { setUserData } = AuthSlice.actions;
export default AuthSlice.reducer