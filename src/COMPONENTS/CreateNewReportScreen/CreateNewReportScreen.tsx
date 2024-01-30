import React, { useState, useEffect } from 'react';
import styles from './CreateNewReportScreen.module.scss'
import DropDuwnSelect from '../../UI/DropDuwnSelect/DropDuwnSelect';
import { observer } from 'mobx-react-lite';
import CREATEREPORT from '../../STORE/CREATEREPORT';
import { PostNewReport } from '../../API/api';
import REPORTS from '../../STORE/REPORTS';
import LOGIN from '../../STORE/LOGIN';

interface CreateNewReportScreenProps {
    visible:boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateNewReportScreen: React.FC<CreateNewReportScreenProps> = observer(({ visible, setVisible }) => {
    const [choiceCreateReport, setChoiceCreateReport] = useState<'месяц'|'год'>('месяц')
    const rootStyle = [styles.main]
    const rootStylesContent = [styles.content]
    if(visible){
        rootStyle.push(styles.activeMain)
        rootStylesContent.push(styles.contentActive)
    }
    const clickChoiseReportType = () => {
        setChoiceCreateReport('год')
        CREATEREPORT.removeNewMonth()
    }
    const createReportClick = async () => {
        // if(CREATEREPORT.newMonth!==null && CREATEREPORT.newYear!==null){
        //     await PostNewReport(LOGIN.userName, CREATEREPORT.newMonth, CREATEREPORT.newYear)
        //     LOGIN.setHash()
        // }
    }

    useEffect(()=>{
        CREATEREPORT.addReportType(choiceCreateReport)
    },[choiceCreateReport])

    return (
        <div className={rootStyle.join(' ')}>
            <div className={rootStylesContent.join(' ')}>
                <button className={styles.closeButton} onClick={()=>setVisible(false)}></button>
                <span className={styles.square}></span>
                <span className={styles.square2}></span>
                {/* <span className={styles.loader}></span> */}
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>создать отчёт</h1>
                    <div className={styles.btnChoiceWrapper}>
                        <button className={choiceCreateReport==='месяц' ? styles.buttonChoise : styles.nonActiveButtonChoise}
                            onClick={()=>setChoiceCreateReport('месяц')}
                        >за месяц</button>
                        <button className={choiceCreateReport==='год' ? styles.buttonChoise : styles.nonActiveButtonChoise}
                            onClick={clickChoiseReportType}
                        >за год</button>
                    </div>
                    <DropDuwnSelect choiceReport={choiceCreateReport}/>
                    <button className={styles.createReportButton} onClick={createReportClick}>создать</button>
                </div>


            </div>
        </div>
    );
});

export default CreateNewReportScreen;