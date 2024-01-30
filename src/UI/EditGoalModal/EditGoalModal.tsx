import React from 'react';
import styles from './EditGoalModal.module.scss'

interface EditGoalModalProps {
    visible:boolean
    newValues: string
    setGoalValue: React.Dispatch<React.SetStateAction<string>>
    clickNewGoal: () => void
}

const EditGoalModal: React.FC<EditGoalModalProps> = ({  visible, newValues, setGoalValue, clickNewGoal }) => {
    const mainStyles = [styles.main]
    if(visible){
        mainStyles.push(styles.mainActive)
    }
    return (
        <div className={mainStyles.join(' ')}>
            <input type="text" 
                value={newValues}
                onChange={e => setGoalValue(e.target.value)}
                placeholder='новая цель'
                className={styles.input}
            />
            <button onClick={clickNewGoal} className={styles.button}>изменить</button>
    </div>
    );
};

export default EditGoalModal;