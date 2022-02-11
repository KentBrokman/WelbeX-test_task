import styles from './TodoItem.module.css'
import { TodoType } from '../../../store/ducks/todo/contracts/stateTypes'
import { useDispatch } from 'react-redux'
import { editTodoTitle, removeTodo, setTodoCompleteStatus } from '../../../store/ducks/todo/actionCreators'
import { useState } from 'react'


interface TodoItemPropsType {
    todoData: TodoType
}

export const TodoItem: React.FC<TodoItemPropsType> = ({ todoData }) => {
    // local state
    const [editMode, toggleEditMode] = useState(false)
    const [inputValue, setInputValue] = useState(todoData.title)
    //
    // utils
    const dispatch = useDispatch()
    //
    // handlers 
    const onTodoClick = () => {
        dispatch(setTodoCompleteStatus({
            ...todoData,
            completed: !todoData.completed
        }))
    }
    const onDeleteClick = () => {
        dispatch(removeTodo(todoData.id))
    }
    const onEdit = () => {
        if (editMode && inputValue.length > 0) {
            dispatch(editTodoTitle({
                ...todoData,
                title: inputValue
            }))
            toggleEditMode(!editMode)
        } else if (!editMode){
            toggleEditMode(!editMode)
        } else {
            return
        }
    }
    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }
    //
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {editMode ?
                    <input
                        value={inputValue}
                        onChange={onInputChange}
                        className={styles.editInput}
                        type="text"
                        name="edittodo" /> :
                    todoData.title
                }

            </div>
            {todoData.completed ?
                <button
                    onClick={onTodoClick}
                    className={styles.todo + ' ' + styles.todoDone}>
                    &#9745;
                </button> :
                <button
                    onClick={onTodoClick}
                    className={styles.todo + ' ' + styles.todoNotDone}>
                    &#9744;
                </button>
            }
            <button
                onClick={onDeleteClick}
                className={styles.delete}>
                &#10006;
            </button>
            <button
                onClick={onEdit}
                className={styles.edit}>
                {editMode ? <span>&#9999;</span> : <span>&#9998;</span>}
            </button>
        </div>
    )
}