import { Link } from "react-router-dom"
import { NavButton } from "../NavButton/NavButton"
import styles from './Navbar.module.css'



export const Navbar: React.FC = () => {
    return (
        <div className={styles.navbarWrapper}>
            <NavButton to='/main' title='Главная'/>
            <NavButton to='/todolist' title='Todo'/>
        </div>
    )
}