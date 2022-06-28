import { combineReducers, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { taskReducer } from "./taskReducer/taskReducer";
import { categoryReducer } from "./categoryReducer/categoryReducer";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    tasks: taskReducer,
    category: categoryReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store)
