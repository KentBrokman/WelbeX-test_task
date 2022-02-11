import { setLoadingStatus, setTodos } from './actionCreators';
import { Dispatch } from "redux"
import { TodosActions } from "./contracts/actionsTypes"
import { LoadingStatus } from '../../types';
import { TodosApi } from '../../../services/todosApi';



export const getTodos = () => {
    return async (dispatch: Dispatch<TodosActions>) => {
        dispatch(setLoadingStatus(LoadingStatus.LOADING))
        const data = await TodosApi.fecthTodos()
        dispatch(setTodos(data))
        dispatch(setLoadingStatus(LoadingStatus.LOADED))
    }
}