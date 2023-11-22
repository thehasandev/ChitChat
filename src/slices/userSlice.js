import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    loggedUser: (state,action) => {
    },
  
  },
})

export const { loggedUser} = userSlice.actions

export default userSlice.reducer