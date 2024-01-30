import React, { useState, useEffect } from 'react';
import styles from './PassiveIncomes.module.scss'
import { observer } from 'mobx-react-lite';
import REPORTS from '../../../STORE/REPORTS';
import { toJS } from "mobx";
import AddActiveIncomesModal from '../../../UI/AddActiveIncomesModal/AddActiveIncomesModal';
import PassiveIncomesItem from './PassiveIncomesItem/PassiveIncomesItem';
import LOGIN from '../../../STORE/LOGIN';
import { PostNewPassiveIncome } from '../../../API/api';

interface PassiveIncomesProps {
    
}

const PassiveIncomes: React.FC<PassiveIncomesProps> = observer(() => {
    const [addValues, setAddValue] = useState<{incomeName:string, incomeValue:string}>({incomeName: '', incomeValue: ''})
    const [visible, setVisible] = useState<boolean>(false)

    const rootStylePlus = [styles.plus]
    if(visible){
        rootStylePlus.push(styles.activePlus)
    }
    const pasIncomes = toJS(REPORTS.passiveIncomes)
    const handleClickActiveIncome = () => {
        setVisible(!visible)  
    }

    const clickAddNewPassiveIncome = async () => {
        let newDebtsObj:any = new Object()
        newDebtsObj['userName'] = LOGIN.userName
        newDebtsObj['year'] = REPORTS.year
        newDebtsObj['month'] = REPORTS.month  
        newDebtsObj['incomeName'] = addValues.incomeName
        newDebtsObj['incomePrice'] = addValues.incomeValue 
        const newListPassiveIncomes = await PostNewPassiveIncome(newDebtsObj)
        setAddValue({incomeName: '', incomeValue: ''})
        REPORTS.addPassiveIncomes(newListPassiveIncomes)
    }

    return (
        <div className={styles.main}>
            <div className={styles.titleWrapper}>
                <span className={styles.line}></span>
                <h1 className={styles.title}>Пассивный</h1>
                <img src="./icons/add.png" className={rootStylePlus.join(' ')} onClick={handleClickActiveIncome}/>
            </div>
            <AddActiveIncomesModal addValues={addValues} visible={visible} setAddValue={setAddValue} clickNewDebs={clickAddNewPassiveIncome}/>
            {
                pasIncomes.length 
                ? pasIncomes.map((el:any) => <PassiveIncomesItem item={el} key={el.id}/>)
                : <p className={styles.helpText}>доходы остутствуют...</p>
            }
            {
                pasIncomes.length
                ? <p className={styles.summIncome}>пассивных: <span>{REPORTS.myPassiveIncomes.toLocaleString()} ₽</span></p>
                : <></>
            }
        </div>
    );
});

export default PassiveIncomes;