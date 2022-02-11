import { combineReducers } from "redux";
import { todoReducer } from "./ducks/todo/reducer";




export const rootReducer = combineReducers({
    todo: todoReducer
})


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>