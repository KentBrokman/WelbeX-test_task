import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNewTodo } from '../../../store/ducks/todo/actionCreators'
import styles from './CreateNewTodo.module.css'


export const CreateNewTodo: React.FC = () => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const onClick = () => {
        if (inputValue.length > 0) {
            dispatch(setNewTodo(inputValue))
            setInputValue('')
        }
    }
    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <input
                    value={inputValue}
                    onChange={onInputChange}
                    className={styles.todoInput}
                    type="text"
                    name="newtodo"
                    placeholder="Ваша новая задача..." />
                <button
                    onClick={onClick}
                    className={styles.createTodoButton}>
                    Создать задачу
                </button>
            </div>
        </div>
    )
}