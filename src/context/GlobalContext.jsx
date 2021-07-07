import React,{useReducer, createContext}from 'react'
import AppReducer from './AppReducer'
const initialState = {
    comments: []
}
/**Create Context */
export const GlobalContext = createContext(initialState)
/**Provide Component */
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState)

    /**Add Comments */
    function addComment(comment) {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
        })
    }
    return(
        <GlobalContext.Provider value={{
            comments:state.comments,
            addComment,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}