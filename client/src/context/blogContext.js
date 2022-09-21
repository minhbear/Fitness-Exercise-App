import { createContext, useReducer } from 'react';

export const blogContext = createContext();

export const blogReducer = (state, action) => {
    switch(action.type){
        case 'GET_ALL_BLOGS':
            return {
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                blogs: [action.payload, ...state.blogs]
            }
        case 'DELETE_BLOG':
            return {
                blogs: state.blogs.filter((blog) => blog.id !== action.payload.id)
            }
    }
}

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, {
        blogs: null
    });

    return(
        <blogContext.Provider value={{ ...state, dispatch }}>
            {children}
        </blogContext.Provider>
    )
}