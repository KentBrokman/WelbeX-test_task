import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TodoType } from "../../store/ducks/todo/contracts/stateTypes"
import { selectTodos } from "../../store/ducks/todo/selectors"
import { getTodos } from "../../store/ducks/todo/thunks"
import { CreateNewTodo } from "./CreateNewTodo/CreateNewTodo"
import { Paginator } from "./Pginator/Paginator"
import { TodoItem } from "./TodoItem/TodoItem"
import styles from './TodoList.module.css'


export const TodoListPage: React.FC = () => {
    const todos = useSelector(selectTodos)
    // local state
    const [todosToDisplay, setTodosToDisplay] = useState<TodoType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 5
    //
    // utils
    const dispatch = useDispatch()
    //
    // handlers
    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    //
    // life cicle methods
    useEffect(() => {
        dispatch(getTodos())
    }, [])
    useEffect(() => {
        setTodosToDisplay(todos.slice(currentPage * pageSize - pageSize, currentPage * pageSize))
    }, [todos, currentPage])
    //
    return (
        <div className={styles.todoListWrapper}>
            <CreateNewTodo />
            <Paginator
                totalItemsCount={todos.length}
                onPageChange={onPageChange}
                currentPage={currentPage}
            />
            <div className={styles.todoList}>
                {todosToDisplay.length > 0 ? todosToDisplay.map((item) => {
                    return (
                        <TodoItem
                            key={item.id}
                            todoData={item}
                        />
                    )
                }) : ''}
            </div>
        </div>
    )
}