import { ADD_CATEGORY, DELETE_CATEGORY } from "../actions/actions"

const initialState = {
    category: [
        {
            id: 1,
            name: 'job',
        },
        {
            id: 2,
            name: 'home',
        }
    ]
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, action.payload]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                category: state.category.filter(item => item.id !== action.payload)
            }
        default: 
        return state
    }
}