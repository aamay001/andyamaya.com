export const MENU_SELECTION = 'MENU_SELECTION';
export const menuSelection = (selection) => {
  return {
    type: MENU_SELECTION,
    selection
  };
};

export const NO_SELECTION = 'NO_SELECTION';
export const noSelection = () => {
  return {
    type: NO_SELECTION
  };
}

export const SET_HEADER_TEXT = 'SET_HEADER_TEXT';
export const setHeaderText = (text) => {
  return {
    type: SET_HEADER_TEXT,
    text
  };
}

export const SHOWING_PAGE = 'SHOWING_PAGE';
export const showingPage = () => {
  return {
    type: SHOWING_PAGE
  };
}

export const NOT_SHOWING_PAGE = 'NOT_SHOWING_PAGE';
export const notShowingPage = () => {
  return {
    type: NOT_SHOWING_PAGE
  };
}
