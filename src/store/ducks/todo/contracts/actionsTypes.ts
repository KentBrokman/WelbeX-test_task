import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { TodosState, TodoType } from "./stateTypes";


export enum TodoActionTypes {
    SET_TODOS = 'todos/SET_TODOS',
    SET_LOADING_STATUS = 'todos/SET_LOADING_STATUS',
    SET_NEW_TODO = 'todos/SET_NEW_TODO',
    SET_TODO_COMPLETE_STATUS = 'todos/SET_TODO_COMPLETE_STATUS',
    REMOVE_TODO = 'todos/REMOVE_TODO',
    EDIT_TODO_TITLE = 'todos/EDIT_TODO_TITLE'
}

export interface SetTodosActionType extends Action<TodoActionTypes> {
    type: TodoActionTypes.SET_TODOS,
    payload: TodosState['todos']
}

export interface SetLoadingStatusActionType extends Action<TodoActionTypes> {
    type: TodoActionTypes.SET_LOADING_STATUS,
    payload: LoadingStatus
}

export interface SetNewTodoActionType extends Action<TodoActionTypes> {
    type: TodoActionTypes.SET_NEW_TODO,
    payload: string
}

export interface SetTodoCompleteStatusActionType extends Action<TodoActionTypes> {
    type: TodoActionTypes.SET_TODO_COMPLETE_STATUS,
    payload: TodoType
}

export interface RemoveTodoActionType extends Action<TodoActionTypes> {
    type: TodoActionTypes.REMOVE_TODO,
    payload: number
}

export interface EditTodoTitleActionType extends Action<TodoActionTypes> {
    type: TodoActionTypes.EDIT_TODO_TITLE,
    payload: TodoType
}



export type TodosActions = SetTodosActionType | SetLoadingStatusActionType | SetNewTodoActionType |
SetTodoCompleteStatusActionType | RemoveTodoActionType | EditTodoTitleActionType