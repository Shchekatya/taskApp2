import { ADD_TASKS, DELETE_TASKS, SORT_TASKS, EDIT_TASKS } from "../actions/actions";

const initialState = {
    tasks: [
        {
            id: 1,
            data: '2022-06-26',
            category: 'job',
            text: 'send email',
            deadline: '2022-06-28',
        },
        {
            id: 2,
            data: '2022-06-20',
            category: 'home',
            text: 'buy some food for dinner',
            deadline: '2022-06-26',
        }
    ]
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASKS:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        case EDIT_TASKS:
            const taskItem = state.tasks.find(item => item.id === action.payload.id)
            const taskIndex = state.tasks.findIndex(item => item.id === action.payload.id)
            taskItem.text = action.payload.text
            console.log(taskItem)
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, taskIndex),
                    taskItem,
                    ...state.tasks.slice(taskIndex + 1),
                ]
            }

        case SORT_TASKS:
            const tasksCopy = state.tasks.map(a => a)
            if (action.payload.sort === 'date') {
                if (action.payload.ab === true)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.date > b.date ? 1 : -1)
                    }
                else if (action.payload.ab === false)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.date > b.date ? -1 : 1)
                    }
            }
            if (action.payload.sort === 'deadline') {
                if (action.payload.ab === true)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.deadline > b.deadline ? 1 : -1)
                    }
                else if (action.payload.ab === false)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.deadline > b.deadline ? -1 : 1)
                    }
            }
            if (action.payload.sort === 'text') {
                if (action.payload.ab === true)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.text > b.text ? 1 : -1)
                    }
                if (action.payload.ab === false)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.text > b.text ? -1 : 1)
                    }
            }
            if (action.payload.sort === 'category') {
                if (action.payload.ab === true)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.category > b.category ? 1 : -1)
                    }
                if (action.payload.ab === false)
                    return {
                        tasks: tasksCopy.sort((a, b) => a.category > b.category ? -1 : 1)
                    }
            }
            else { return state }
            break;
        default:
            return state
    }
}