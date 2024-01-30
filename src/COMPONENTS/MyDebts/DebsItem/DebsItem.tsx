import React from 'react';
import styles from './DebsItem.module.scss'

interface DebsItemProps {
    arr: any
}

const DebsItem: React.FC<DebsItemProps> = ({ arr }) => {

       
    return (
        <div className={styles.wrapper}>
            <img src="./icons/credit.png" className={styles.icon}/>
            <div className={styles.priceWrapper}>
                <h2 className={styles.priceName}>{arr[0]}</h2>
                <p className={styles.price}>{arr[1].toLocaleString()} ₽</p>
            </div>
        </div>
    );
};

export default DebsItem;