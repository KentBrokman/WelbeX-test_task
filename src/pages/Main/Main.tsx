import styles from './Main.module.css'



export const MainPage: React.FC = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.logo}>TODO App</div>
            <div className={styles.description}>
                В этом приложении можно создавать спиcок задач!
            </div>
        </div>
    )
}