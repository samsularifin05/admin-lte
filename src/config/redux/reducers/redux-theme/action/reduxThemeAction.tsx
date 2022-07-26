import {Dispatch} from 'react'
import {IAppState} from '../../../Store'
import {CONTENT, FOOTER, HEADER, SIDEBAR} from './reduxThemeTypes'

export const handleSetPageSidebar = (data: boolean) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    dispatch({
      type: SIDEBAR,
      payload: {
        data: data,
      },
    })
  }
}
export const handleSetPageHeader = (data: boolean) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    dispatch({
      type: HEADER,
      payload: {
        data: data,
      },
    })
  }
}
export const handleSetPageFooter = (data: boolean) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    dispatch({
      type: FOOTER,
      payload: {
        data: data,
      },
    })
  }
}
export const handleSetPageContent = (data: boolean) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    dispatch({
      type: CONTENT,
      payload: {
        data: data,
      },
    })
  }
}
