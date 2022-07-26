import {Field, reduxForm} from 'redux-form'
import {
  handleSetPageFooter,
  handleSetPageHeader,
  handleSetPageSidebar,
} from './redux/reducers/redux-theme'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Button from './component/Button'
export {
    Button,
  Field,
  Link,
  reduxForm,
  useEffect,
  useDispatch,
  withRouter,
  handleSetPageFooter,
  handleSetPageHeader,
  handleSetPageSidebar,
}
export {default as setupAxios} from './axios/SetupAxios'
export * from './redux/reducers/RootReducer'
export * from './themes'
export * from './component'
export * from './helper'
