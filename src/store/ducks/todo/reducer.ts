import { LoadingStatus } from "../../types"
import { TodoActionTypes, TodosActions } from "./contracts/actionsTypes"
import { TodosState } from "./contracts/stateTypes"




const initialState: TodosState = {
    todos: [],
    loadingStatus: LoadingStatus.NEVER
}
type InitialStateType = typeof initialState

export const todoReducer = (state = initialState, action: TodosActions): InitialStateType => {

    switch (action.type) {
        case TodoActionTypes.SET_TODOS:
            return {
                ...state,
                todos: action.payload.reverse()
            }
        case TodoActionTypes.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload
            }
        case TodoActionTypes.SET_NEW_TODO:
            return {
                ...state,
                todos: [{
                    userId: 11,
                    id: (state.todos?.at(0)?.id || 0) + 1,
                    title: action.payload,
                    completed: false
                }, ...state.todos]
            }
        case TodoActionTypes.SET_TODO_COMPLETE_STATUS:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...action.payload
                        }
                    }
                    return item
                })
            }
        case TodoActionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }
        case TodoActionTypes.EDIT_TODO_TITLE:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...action.payload
                        }
                    }
                    return item
                })
            }
        default:
            return state;
    }
}

