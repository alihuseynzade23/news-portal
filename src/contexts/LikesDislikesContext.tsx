import { createContext, useReducer } from "react";

export const likesDislikesContext = createContext()

const reducer = (state, action) => {
    const {id, count} = action.payload;

    switch(action.type) {
        case 'like':
            const newsLikes = state.likes[id]

            const likes = state.likes;
            if(newsLikes) {
                newsLikes.count = count + 1;
            } else {
                newsLikes[id] = {id, count: count + 1}
            }

            return {...state, likes: {...likes}}

        case 'dislike':
            const newsDislikes = state.dislikes[id]
            const dislikes = state.dislikes;
            if(newsDislikes) {
                newsDislikes.count = count + 1;
            } else {
                dislikes[id] = {id, count: count + 1}
            }
            return {...state, dislikes: {...dislikes}}       

        default:
            return state;
    }
}

export default function LikesDislikesProvider ({children}) {
    
    const [state, dispatch] = useReducer(reducer, {
        likes: {},
        dislikes: {},
    })
    return (
        <likesDislikesContext.Provider value={[state, dispatch]}>
            {children}
        </likesDislikesContext.Provider>
    )
}
