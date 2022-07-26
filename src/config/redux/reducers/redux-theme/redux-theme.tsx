import {Action} from 'redux'
export interface ActionWithPayload<T> extends Action {
  payload?: T
}
export interface DefaultStateI {
  handleSetPageSidebar: boolean,
  handleSetPageHeader: boolean,
  handleSetPageFooter: boolean,
  handleSetPageContent: boolean,
  data: any
}

const defaultState: DefaultStateI = {
  handleSetPageSidebar: true,
  handleSetPageHeader: true,
  handleSetPageFooter: true,
  handleSetPageContent: true,
  data: [],
}

const theme = (
  state: DefaultStateI = defaultState,
  action: ActionWithPayload<DefaultStateI>
): DefaultStateI => {
  switch (action.type) {
    case 'SIDEBAR':
      return {
        ...state,
        handleSetPageSidebar: action.payload?.data,
    };
    case 'HEADER':
      return {
        ...state,
        handleSetPageHeader: action.payload?.data,
    };
    case 'FOOTER':
      return {
        ...state,
        handleSetPageFooter: action.payload?.data,
    };
    case 'CONTENT':
      return {
        ...state,
        handleSetPageContent: action.payload?.data,
    };
    default:
      return state
  }
}

export default theme
