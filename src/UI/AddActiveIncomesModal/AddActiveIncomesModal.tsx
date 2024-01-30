import React from 'react';
import styles from './AddActiveIncomesModal.module.scss'

interface AddActiveIncomesModalProps {
    visible: boolean
    addValues: {incomeName:string, incomeValue:string}
    setAddValue: React.Dispatch<React.SetStateAction<{incomeName:string, incomeValue:string}>>
    clickNewDebs: () => void
}

const AddActiveIncomesModal: React.FC<AddActiveIncomesModalProps> = ({ visible, addValues, setAddValue, clickNewDebs }) => {
    const mainStyles = [styles.main]
    if(visible){
        mainStyles.push(styles.mainActive)
    }
    return (
        <div className={mainStyles.join(' ')}>
            <input type="text" 
                value={addValues.incomeName}
                onChange={e => setAddValue({...addValues,incomeName: e.target.value})}
                placeholder='Название'
                className={styles.input}
            />
            <input type="text" 
                value={addValues.incomeValue}
                onChange={e => setAddValue({...addValues,incomeValue: e.target.value})}
                placeholder='Сумма'
                className={styles.input}

            />
            <button onClick={clickNewDebs} className={styles.button}>добавить</button>
        </div>
    );
};

export default AddActiveIncomesModal;