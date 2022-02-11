import { Link } from 'react-router-dom'
import styles from './NavButton.module.css'

interface NavButtonPropsType {
    to: string;
    title: string
}

export const NavButton: React.FC<NavButtonPropsType> = ({to, title}) => {
    return (
        <div className={styles.navButtonWrapper}>
            <Link to={to}>
                <div className={styles.navButton}>
                    {title}
                </div>
            </Link>
        </div>
    )
}