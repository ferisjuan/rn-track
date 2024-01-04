import { useContext } from 'react'
import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signup':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => async (credentials) => {
  try {
    const response = await trackerApi.post('/signup', credentials)
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signup', payload: response.data.token })

    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
}

const signin = (dispatch) => async (credentials) => { }

const signout = (dispatch) => () => { }

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: '' }
)

export const useAuthContext = () => useContext(Context)
