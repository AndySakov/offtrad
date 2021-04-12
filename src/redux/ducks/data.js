import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null
  },
  reducers: {
    login: (state, action) => {
      console.log("Logging In!")
      return {
        isLoggedIn: true,
        user: action.payload
      }
    },
    logout: (state) => {
      console.log("Logging Out!")
      return {
        isLoggedIn: false,
        user: null
      }
    }
  }
})

export const { login, logout } = userSlice.actions

export const user = (state) => state.user.user

export default userSlice.reducer