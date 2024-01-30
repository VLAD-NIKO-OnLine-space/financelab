import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ActiveIncomes.module.scss'
import ActiveIncomesItem from './ActiveIncomesItem/ActiveIncomesItem';
import REPORTS from '../../../STORE/REPORTS';
import { toJS } from "mobx";
import AddActiveIncomesModal from '../../../UI/AddActiveIncomesModal/AddActiveIncomesModal';
import LOGIN from '../../../STORE/LOGIN';
import { PostNewActiveIncome } from '../../../API/api';

interface ActiveIncomesProps {
    
}

const ActiveIncomes: React.FC<ActiveIncomesProps> = observer(() => {
    const [addValues, setAddValue] = useState<{incomeName:string, incomeValue:string}>({incomeName: '', incomeValue: ''})
    const [visible, setVisible] = useState<boolean>(false)

    const rootStylePlus = [styles.plus]
    if(visible){
        rootStylePlus.push(styles.activePlus)
    }
    const actIncomes = toJS(REPORTS.activeIncomes)
    const handleClickActiveIncome = () => {
        setVisible(!visible)  
    }

    const clickAddNewActiveIncome = async () => {
        if(addValues.incomeName && addValues.incomeValue){
            let newDebtsObj:any = new Object()
            newDebtsObj['userName'] = LOGIN.userName
            newDebtsObj['year'] = REPORTS.year
            newDebtsObj['month'] = REPORTS.month
            newDebtsObj['incomeName'] = addValues.incomeName
            newDebtsObj['incomePrice'] = addValues.incomeValue
            const newListActiveIncomes = await PostNewActiveIncome(newDebtsObj)
            setAddValue({incomeName: '', incomeValue: ''})
            REPORTS.addActiveIncomes(newListActiveIncomes)
        }
    }


    return (
        <div className={styles.main}>
            <div className={styles.titleWrapper}>
                <span className={styles.line}></span>
                <h1 className={styles.title}>Активный</h1>
                <img src="./icons/add.png" className={rootStylePlus.join(' ')} onClick={handleClickActiveIncome}/>
            </div>
            <AddActiveIncomesModal addValues={addValues} visible={visible} setAddValue={setAddValue} clickNewDebs={clickAddNewActiveIncome}/>
            {
                actIncomes.length
                ? actIncomes.map((el:any) => <ActiveIncomesItem item={el} key={el.id}/>)
                : <p className={styles.helpText}>доходы остутствуют...</p>
            }
            {
                actIncomes.length
                ? <p className={styles.summIncome}>активных: <span>{REPORTS.myActiveIncomes.toLocaleString()} ₽</span></p>
                : <></>
            }
        </div>
    );
});

export default ActiveIncomes;