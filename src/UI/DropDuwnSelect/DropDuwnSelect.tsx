import React, { useState } from 'react';
import styles from './DropDuwnSelect.module.scss';
import DropDuwnSelectItem from './DropDuwnSelectItem/DropDuwnSelectItem';
import { observer } from 'mobx-react-lite';
import CREATEREPORT from '../../STORE/CREATEREPORT';

interface DropDuwnSelectProps {
    choiceReport: 'месяц'|'год'
}
const monts:string[] = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
const years:string[] = ['2021', '2022', '2023', '2024', '2025', '2026', '2027']

const DropDuwnSelect: React.FC<DropDuwnSelectProps> = observer(({ choiceReport }) => {
    const [vis, setVis] = useState<boolean>(false)
    const [vis2, setVis2] = useState<boolean>(false)
    const styleDrop1 = [styles.drop1]
    const styleDrop2 = [styles.drop2]
    if(vis){styleDrop1.push(styles.drop1On)} 
    if(vis2){styleDrop2.push(styles.drop2On)}

    const clickChoiceMonth = (element:string) => {
        CREATEREPORT.addMonth(element)
        setVis(false)
    }

    const clickChoiceYear = (element:string) => {
        CREATEREPORT.addYear(element)
        setVis2(false)
    }

    const clickChoiceYearforYearReport = (element:string) => {
        CREATEREPORT.addYear(element)
        setVis2(false)
    }

    

    return (
        <div className={styles.DropDuwnSelect}>
            {
                choiceReport==='месяц'
                ? 
                <div className={styles.wrapper1}>
                    <p className={styles.par}>за</p>
                    <div className={styles.wrapDrop1}>                        
                        <p onClick={()=>setVis(!vis)} className={styles.parClick}>{CREATEREPORT.newMonth===null?'месяц':CREATEREPORT.newMonth}</p>
                        <div className={styleDrop1.join(' ')}>
                            {
                                monts.map((e, index)=><DropDuwnSelectItem itemName={e} key={index} handleClick={clickChoiceMonth}/>)
                            }
                        </div>

                    </div>

                    <div className={styles.wrapDrop1}>                        
                        <p onClick={()=>setVis2(!vis2)} className={styles.parClick}>{CREATEREPORT.newYear===null?'год':CREATEREPORT.newYear}</p>
                        <div className={styleDrop2.join(' ')}>
                            {
                                years.map((e, index)=><DropDuwnSelectItem itemName={e} key={index} handleClick={clickChoiceYear}/>)
                            }
                        </div>
                    </div>
                    <p className={styles.par}>года</p>
                </div>
                : 
                <div className={styles.wrapper1}>
                    <p className={styles.par}>за</p>
                    <div className={styles.wrapDrop1}>                        
                        <p onClick={()=>setVis2(!vis2)} className={styles.parClick}>{CREATEREPORT.newYear===null?'год':CREATEREPORT.newYear}</p>
                        <div className={styleDrop2.join(' ')}>
                            {
                                years.map((e, index)=><DropDuwnSelectItem itemName={e} key={index} handleClick={clickChoiceYear}/>)
                            }
                        </div>
                    </div>
                    <p className={styles.par}>год</p>
                </div>
            }
        </div>
    );
});

export default DropDuwnSelect;