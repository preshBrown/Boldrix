import { uiActions } from "./uiSlice";
const { setTheme, toggleTheme } = uiActions;


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