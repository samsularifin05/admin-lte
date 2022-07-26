import {Dispatch} from 'react'
import {setLoading} from './config/redux/reducers/redux-loading/action/redux-loading'
import {IAppState} from './config/redux/Store'

export const deleteTransaction = (data: any) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    dispatch(setLoading())
  }
}
