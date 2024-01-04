import { useContext } from 'react'
import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'signout':
      return { errorMessage: '', token: null }
    default:
      return state
  }
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => async (credentials) => {
  try {
    const response = await trackerApi.post('/signup', credentials)
    await AsyncStorage.setItem('token', response.data.token)

    dispatch({
      type: 'signin',
      payload: response.data.token
    })

    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    })
  }
}

const signin = (dispatch) => async (credentials) => {
  try {
    const response = await trackerApi.post('/signin', credentials)
    await AsyncStorage.setItem('token', response.data.token)

    dispatch({
      type: 'signin',
      payload: response.data.token
    })

    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    })

  }
}

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token')

  if (token) {
    dispatch({ type: 'signup', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout', payload: null })
  navigate('loginFlow')
}

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    clearErrorMessage,
    signin,
    signup,
    signout,
    tryLocalSignin
  },
  { token: null, errorMessage: '' }
)

export const useAuthContext = () => useContext(Context)
