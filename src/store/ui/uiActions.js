import { uiActions } from "./uiSlice";
const { setTheme, toggleTheme, openAuthDropdown, closeAuthDropdown } = uiActions;


export const initTheme = (theme) => {
    return (dispatch) => {
dispatch(setTheme(theme))
    }
}

export const toggleMode = () => {
    return (dispatch) => {
dispatch(toggleTheme())
    }
}

export const openAuthUi = () => {
    return dispatch => {
        dispatch(openAuthDropdown())
    }
}

export const closeAuthUi = () => {
    return dispatch => {
        dispatch(closeAuthDropdown())
    }
}