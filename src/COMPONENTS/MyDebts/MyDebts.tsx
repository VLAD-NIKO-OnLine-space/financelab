import React, { useState } from 'react';
import styles from './MyDebts.module.scss'
import { observer } from 'mobx-react-lite';
import REPORTS from '../../STORE/REPORTS';
import { toJS } from "mobx";
import DebsItem from './DebsItem/DebsItem';
import AddDebtsModal from '../../UI/AddDebtsModal/AddDebtsModal';
import { PostNewDebts } from '../../API/api';

interface MyDebtsProps {
    
}

const MyDebts: React.FC<MyDebtsProps> = observer(() => {

    const [addValues, setAddValue] = useState<{addName:string, addValue:string}>({addName: '', addValue: ''})
    const [visible, setVisible] = useState<boolean>(false)

    const mydebts = toJS(REPORTS.myDebts)
    const entries = Object.entries(mydebts);

    const handleClickAddDebts = () => {
        setVisible(!visible)  
    }

    const clickNewDebs = async () => {
        let newDebtsObj:any = new Object()
        newDebtsObj[addValues.addName] = addValues.addValue
        console.log(newDebtsObj)
        setAddValue({addName: '', addValue: ''})

    }

   
    return (
        <div className={styles.MyDebts}>
            <div className={styles.addWrapper}>
                <h1 className={styles.title}>Пассивы</h1>
                <button className={styles.addButton} onClick={handleClickAddDebts}>
                    <img src="./icons/edit.svg" className={styles.addButtonIcon}/>
                </button>
            </div>
            
            {/* <AddDebtsModal addValues={addValues} visible={visible} setAddValue={setAddValue} clickNewDebs={clickNewDebs}/> */}

            {
               entries.map((e: any) => <DebsItem key={e} arr={e}/>)
            }
                 
        </div>
    );
});

export default MyDebts;