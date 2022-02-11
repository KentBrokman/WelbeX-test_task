import { useState } from 'react'
import styles from './Paginator.module.css'


interface PaginatorPropsType {
    totalItemsCount: number,
    pageSize?: number,
    portionSize?: number,
    onPageChange: (pageNumber: number) => any,
    currentPage: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
    totalItemsCount,
    pageSize = 5,
    portionSize = 5,
    onPageChange,
    currentPage
}) => {
    const pages = []                                            // номера страниц
    const pagesCount = Math.ceil(totalItemsCount / pageSize)    // кол-во страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionsCount = Math.ceil(pagesCount / portionSize)       // кол-во страниц, отображаемых на странице в данный момент
    const [portionNumber, setPortionNumber] = useState(1);            // текущая отображаемая порция
    const leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    const portionRightBorder = portionNumber * portionSize;
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.arrowButton}
                onClick={() => setPortionNumber(portionNumber - 1)}
                disabled={portionNumber === 1}>
                &#8678;
            </button>
            <div className={styles.pages}>
                {pages.filter(page => page >= leftPortionBorder && page <= portionRightBorder)
                    .map(p => {
                        return (
                            <button
                                className={`${styles.pageButton} ${currentPage === p && styles.pageButtonActive}`}
                                onClick={() => onPageChange(p)}
                                key={p}>{p}</button>
                        )
                    }
                    )
                }
            </div>
            <button
                className={styles.arrowButton}
                onClick={() => setPortionNumber(portionNumber + 1)}
                disabled={portionNumber === portionsCount}>
                &#8680;
            </button>
        </div>
    )
}