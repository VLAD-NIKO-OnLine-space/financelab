import React from 'react';
import styles from './ExpenditureItem.module.scss'

interface ExpenditureItemProps {
    item: {[key:string]:string|number}
}

const ExpenditureItem: React.FC<ExpenditureItemProps> = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <img src="./icons/expenses.png" className={styles.icon}/>
            <div className={styles.priceWrapper}>
                <h2 className={styles.priceName}>{item.expenditureName}</h2>
                <p className={styles.price}>{item.expenditurePrice.toLocaleString()} ₽</p>
            </div>
        </div>
    );
};  

export default ExpenditureItem;