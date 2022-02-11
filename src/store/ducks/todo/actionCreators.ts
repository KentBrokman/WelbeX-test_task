import { LoadingStatus } from "../../types";
import { EditTodoTitleActionType, RemoveTodoActionType, SetLoadingStatusActionType, SetNewTodoActionType, SetTodoCompleteStatusActionType, SetTodosActionType, TodoActionTypes } from "./contracts/actionsTypes";
import { TodosState, TodoType } from "./contracts/stateTypes";




export const setTodos = (payload: TodosState['todos']): SetTodosActionType => ({
    type: TodoActionTypes.SET_TODOS,
    payload
})

export const setLoadingStatus = (payload: LoadingStatus): SetLoadingStatusActionType => ({
    type: TodoActionTypes.SET_LOADING_STATUS,
    payload
})

export const setNewTodo = (payload: string): SetNewTodoActionType => ({
    type: TodoActionTypes.SET_NEW_TODO,
    payload
})

export const setTodoCompleteStatus = (payload: TodoType): SetTodoCompleteStatusActionType => ({
    type: TodoActionTypes.SET_TODO_COMPLETE_STATUS,
    payload
})

export const removeTodo = (payload: number): RemoveTodoActionType => ({
    type: TodoActionTypes.REMOVE_TODO,
    payload
})

export const editTodoTitle = (payload: TodoType): EditTodoTitleActionType => ({
    type: TodoActionTypes.EDIT_TODO_TITLE,
    payload
})