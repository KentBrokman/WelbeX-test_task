import { LoadingStatus } from "../../../types";



export interface TodoType {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodosState {
    todos: TodoType[],
    loadingStatus: LoadingStatus
}