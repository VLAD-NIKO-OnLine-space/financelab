import React, { useEffect, useMemo, useState } from 'react';
import styles from './MyAssets.module.scss'
import { observer } from 'mobx-react-lite';
import REPORTS from '../../STORE/REPORTS';
import { getCourseUDS } from '../../API/courseUSD';
import LOGIN from '../../STORE/LOGIN';
import EditGoalModal from '../../UI/EditGoalModal/EditGoalModal';
import { RepathGoal } from '../../API/api';

interface MyAssetsProps {
    
}

const MyAssets: React.FC<MyAssetsProps> = observer(() => {
    const [usd, setUsd] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false)
    const [newValue, setGoalValue] = useState<string>('')
    const [progressValue, setProgressValue] = useState<number>(0)
    

    const assets = REPORTS.myStocks + REPORTS.myWallet + REPORTS.myCrypto * usd

    const calculationProgressValue:number = Number(((REPORTS.myCrypto+REPORTS.myStocks+REPORTS.myWallet)/Number(LOGIN.myGoal)*100).toFixed(0))
    const getCource = async () => {
        const nowCource = await getCourseUDS()
        setUsd(nowCource)
        if(usd){
            REPORTS.addCryproInRUB(nowCource*REPORTS.myCrypto)
        }
    }

    const handleClick = async () => {
        if(newValue){
            const responce = await RepathGoal(LOGIN.id, newValue)
            LOGIN.addMyGoal(responce.activGoal)
            setGoalValue('')
            setVisible(false)
        }
    }

    useEffect(()=>{
        getCource()
        setProgressValue(calculationProgressValue)
    },[LOGIN.myGoal, REPORTS.myCrypto, REPORTS.myStocks, REPORTS.myWallet])
    
    return (
        <div className={styles.wrapper}>
            <button className={styles.settingButon} onClick={()=>setVisible(!visible)} title='Изменить цель'>
                <img src="./icons/setting.png" className={styles.settingImage}/>
            </button>
            <EditGoalModal visible={visible} newValues={newValue} setGoalValue={setGoalValue} clickNewGoal={handleClick}/>
            <p className={styles.assetsSum}>₽ {assets.toLocaleString()}</p>
            <p className={styles.signature}>Всего активов</p>
            <progress value="0" max="100" style={{ "--value": progressValue, "--max": 100 } as React.CSSProperties}></progress>
            <p className={styles.goal}>Цель по активам: {LOGIN.myGoal.toLocaleString()} ₽</p>
        </div>
    );
});

export default MyAssets;