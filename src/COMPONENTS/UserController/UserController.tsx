import React, { useState } from 'react';
import { TypeReportList, TypeYearReportList } from '../../TYPES/TypeUser';
import ReportButton from '../../UI/ReportButton/ReportButton';
import { getActiveIncomes, getAllExpenditure, getAllInfoByUserName_Month_year, getBebtsBy_UserName_Year, getPassiveIncomes } from '../../API/api';
import { observer } from 'mobx-react-lite';
import REPORTS from '../../STORE/REPORTS';
import styles from './UserController.module.scss'
import LOGIN from '../../STORE/LOGIN';
import ToggleSwitches from '../../UI/ToggleSwitches/ToggleSwitches';
import THEME from '../../STORE/THEME';


interface UserControllerProps {
    reportList: TypeReportList[]
    yearReportList: TypeYearReportList[]
    clickOpenModal: ()=>void
}

const UserController: React.FC<UserControllerProps> = observer(({ reportList, clickOpenModal, yearReportList }) => {

    const [choiceReport, setChoiceReport] = useState<'месяц' | 'год'>('месяц')
    const [visible, setVisible] = useState<boolean>(false)


    const click = async ( month:string, year: number) => {
        const allAssets = await getAllInfoByUserName_Month_year(LOGIN.userName, month, year)
        REPORTS.addAssets(allAssets.crypto, allAssets.stocks, allAssets.wallet)
        REPORTS.addData(month, year)
        const allDebts = await getBebtsBy_UserName_Year(LOGIN.userName, month, year)
        REPORTS.addDebts(allDebts)

        const allActiveIncomes = await getActiveIncomes(LOGIN.userName, month, year)
        REPORTS.addActiveIncomes(allActiveIncomes)

        const allPassiveIncomes = await getPassiveIncomes(LOGIN.userName, month, year)
        REPORTS.addPassiveIncomes(allPassiveIncomes)

        const allExpenditure = await getAllExpenditure(LOGIN.userName, month, year)
        REPORTS.addExpenditure(allExpenditure)
    }

    const choseYearsReports = () => {
        console.log('message')
    }

    const clickExitButton = () => {
        LOGIN.setLogin(false)
        THEME.resetToDarkTheme()
    }

    return (
        <div className={styles.UserController}>

            <div className={styles.userWrapper}>
                <h1 className={styles.title}>{LOGIN.userName}</h1>
                <ToggleSwitches/>

                <button className={styles.exit} onClick={clickExitButton} title='Выйти'>
                    <img src="./icons/exit.svg"  className={styles.exitIcon}/>
                </button>
            </div>
            
            <span className={styles.line}></span>
            <p className={styles.titleRep}>мои отчёты</p>
            <div className={styles.buttonsWrapper}>
                <button 
                    className={choiceReport==='месяц' ? styles.buttonChoiceActive : styles.buttonChoice}
                    onClick={()=>setChoiceReport('месяц')}
                    >по месяцам</button>
                <button 
                    className={choiceReport==='год' ? styles.buttonChoiceActive : styles.buttonChoice}
                    onClick={()=>setChoiceReport('год')}
                    >по годам</button>
            </div>

            {
                choiceReport==='месяц'
                ?
                reportList.map((e,index) => <ReportButton 
                        key={index} 
                        month={e.month} 
                        year={e.year} 
                        handleClick={click}
                    ></ReportButton>)
                : 
                yearReportList.map((e, index) => <ReportButton
                    key={index}
                    year={e.year}
                    month=''
                    handleClick={choseYearsReports}
                />)
            }
            <button className={styles.createNewReportButton} onClick={clickOpenModal}>создать новый отчет</button>
        </div>
    );
});

export default UserController;