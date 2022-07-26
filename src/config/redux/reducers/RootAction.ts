import {
  setLoading,
  setLoadingApprove,
  setSplashScreen,
  stopLoading,
  stopLoadingApprove,
  stopSplashScreen,
} from './redux-loading/action/redux-loading.types'
import {handleSetPageSidebar} from './redux-theme/action/reduxThemeTypes'

export type RootAction =
  | setLoading
  | stopLoading
  | setSplashScreen
  | stopSplashScreen
  | setLoadingApprove
  | stopLoadingApprove
  
