import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },
  reducers: {
    loggedUser: (state,action) => {
       state.value = action.payload
    },
  },
})

export const { loggedUser} = userSlice.actions

export default userSlice.reducer