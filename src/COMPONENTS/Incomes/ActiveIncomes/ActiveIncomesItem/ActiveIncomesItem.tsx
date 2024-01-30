import React from 'react';
import styles from './ActiveIncomesItem.module.scss'
interface ActiveIncomesItemProps {
    item: {[key:string]:string|number}
}

const ActiveIncomesItem: React.FC<ActiveIncomesItemProps> = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <img src="./icons/income.png" className={styles.icon}/>
            <div className={styles.priceWrapper}>
                <h2 className={styles.priceName}>{item.incomeName}</h2>
                <p className={styles.price}>{item.incomePrice.toLocaleString()} ₽</p>
            </div>
        </div>
    );
};

export default ActiveIncomesItem;