import React, { useState } from 'react';
import styles from './Expenditure.module.scss'
import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";
import REPORTS from '../../STORE/REPORTS';
import ExpenditureItem from './ExpenditureItem/ExpenditureItem';
import AddActiveIncomesModal from '../../UI/AddActiveIncomesModal/AddActiveIncomesModal';
import LOGIN from '../../STORE/LOGIN';
import { PostNewExpenditure } from '../../API/api';


const Expenditure: React.FC = observer(() => {
    const [addValues, setAddValue] = useState<{incomeName:string, incomeValue:string}>({incomeName: '', incomeValue: ''})
    const [visible, setVisible] = useState<boolean>(false)
    const allExpenditure = toJS(REPORTS.allExpenditure)
    const rootStylePlus = [styles.plus]
    if(visible){
        rootStylePlus.push(styles.activePlus)
    }
    const handleClickActiveIncome = () => {
        setVisible(!visible)  
    }
    const clickAddNewExpenditure = async () => {
        if(addValues.incomeName && addValues.incomeValue){
            let newDebtsObj:any = new Object()
            newDebtsObj['userName'] = LOGIN.userName
            newDebtsObj['year'] = REPORTS.year
            newDebtsObj['month'] = REPORTS.month
            newDebtsObj['expenditureName'] = addValues.incomeName
            newDebtsObj['expenditurePrice'] = addValues.incomeValue
            const newListActiveIncomes = await PostNewExpenditure(newDebtsObj)
            setAddValue({incomeName: '', incomeValue: ''})
            REPORTS.addExpenditure(newListActiveIncomes)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.wrapperTitle}>
                <h1 className={styles.title}>Расходы</h1>
                <img src="./icons/add.png" className={rootStylePlus.join(' ')} onClick={handleClickActiveIncome}/>
            </div>
            <AddActiveIncomesModal addValues={addValues} visible={visible} setAddValue={setAddValue} clickNewDebs={clickAddNewExpenditure}/>
            <span className={styles.line}></span>
            {
                allExpenditure.length
                ? allExpenditure.map((el:any) => <ExpenditureItem item={el} key={el.id}/>)
                : <p className={styles.helpText}>расходы остутствуют...</p>
            }
            <p className={styles.allIncomes}>Всего расходов: <span>{REPORTS.myExpenditure.toLocaleString()} ₽</span></p>
        </div>
    );
});

export default Expenditure;