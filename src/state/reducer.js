import * as actions from './actions';

const initialState = {
  headerText: '',
  showMenuOptions: true,
  showingPage: false,
  showPage: [
    false, // About
    false, // Projects
    false, // Resume
    false  // Contact
  ]
}

const menuSelection = (state, action) => {
  const showPage = [...initialState.showPage];
  showPage[action.selection] = true;
  return {
    ...state,
    showPage: [...showPage]
  };
};

const noSelection = (state) => {
  const showingPage = false
  const showPage = [...initialState.showPage];
  return {
    ...state,
    showingPage,
    showPage
  };
}

const setHeaderText = (state, action) => {
  return {
    ...state,
    headerText: action.text
  };
}

const showingPage = (state) => {
  return {
    ...state,
    showingPage: true
  };
}

const notShowingPage = (state) => {
  return {
    ...state,
    showingPage: false
  };
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.MENU_SELECTION:
      return menuSelection(state, action)
    case actions.NO_SELECTION:
      return noSelection(state);
    case actions.SET_HEADER_TEXT:
      return setHeaderText(state, action);
    case actions.SHOWING_PAGE:
      return showingPage(state);
    case actions.NOT_SHOWING_PAGE:
      return notShowingPage(state);
    default:
      return state;
  }
}