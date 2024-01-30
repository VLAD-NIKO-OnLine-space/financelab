import React from 'react';
import styles from './DropDuwnSelectItem.module.scss'

interface DropDuwnSelectItemProps {
    itemName:string
    handleClick: (element:string)=>void
}

const DropDuwnSelectItem: React.FC<DropDuwnSelectItemProps> = ({ itemName, handleClick }) => {
    const click = () => {
        handleClick(itemName)
    }

    return (
        <div className={styles.DropDuwnSelectItem} onClick={click}>
            <h1 className={styles.title}>{itemName}</h1>
        </div>
    );
};

export default DropDuwnSelectItem;