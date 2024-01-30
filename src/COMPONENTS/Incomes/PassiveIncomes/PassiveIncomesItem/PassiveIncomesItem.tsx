import React from 'react';
import styles from './PassiveIncomesItem.module.scss'

interface PassiveIncomesItemProps {
    item: {[key:string]:string|number}
}

const PassiveIncomesItem: React.FC<PassiveIncomesItemProps> = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <img src="./icons/profit.png" className={styles.icon}/>
            <div className={styles.priceWrapper}>
                <h2 className={styles.priceName}>{item.incomeName}</h2>
                <p className={styles.price}>{item.incomePrice.toLocaleString()} ₽</p>
            </div>
        </div>
    );
};

export default PassiveIncomesItem;