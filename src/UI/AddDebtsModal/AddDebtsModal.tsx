import React from 'react';
import styles from './AddDebtsModal.module.scss'

interface AddDebtsModalProps {
    visible: boolean
    addValues: {addName:string, addValue:string}
    setAddValue: React.Dispatch<React.SetStateAction<{addName:string, addValue:string}>>
    clickNewDebs: () => void
}

const AddDebtsModal: React.FC<AddDebtsModalProps> = ({ visible, addValues, setAddValue, clickNewDebs }) => {

    const mainStyles = [styles.main]
    if(visible){
        mainStyles.push(styles.mainActive)
    }


    return (
        <div className={mainStyles.join(' ')}>
            <input type="text" 
                value={addValues.addName}
                onChange={e => setAddValue({...addValues,addName: e.target.value})}
                placeholder='Название'
            />
            <input type="text" 
                value={addValues.addValue}
                onChange={e => setAddValue({...addValues,addValue: e.target.value})}
                placeholder='Сумма'

            />
            <button onClick={clickNewDebs}>add</button>
        </div>
    );
};

export default AddDebtsModal;