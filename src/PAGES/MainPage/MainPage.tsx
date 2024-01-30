import React, { useState, useEffect } from 'react';
import LOGIN from '../../STORE/LOGIN';
import { observer } from 'mobx-react-lite';
import InvestmentPortfolio from '../../COMPONENTS/InvestmentPortfolio/InvestmentPortfolio';
import { getAllYearReport, getReportByUserName } from '../../API/api';
import UserController from '../../COMPONENTS/UserController/UserController';
import { TypeReportList } from '../../TYPES/TypeUser';
import MyAssets from '../../COMPONENTS/MyAssets/MyAssets';
import styles from './MainPage.module.scss';
import MyDebts from '../../COMPONENTS/MyDebts/MyDebts';
import Incomes from '../../COMPONENTS/Incomes/Incomes';
import CreateNewReportScreen from '../../COMPONENTS/CreateNewReportScreen/CreateNewReportScreen';
import Expenditure from '../../COMPONENTS/Expenditure/Expenditure';
import TopBar from '../../COMPONENTS/TopBar/TopBar';

interface MainPageProps {
    
}

const MainPage: React.FC<MainPageProps> = observer(() => {
    const [reportsList, setReportsList] = useState<TypeReportList[]>([])
    const [yearReportList, setYearReportList] = useState([])
    const [visible, setVisible] = useState<boolean>(false)

    const getReports = async () => {
        const reports = await getReportByUserName(LOGIN.userName)
        const yearsReports = await getAllYearReport(LOGIN.userName)
        setYearReportList(yearsReports)
        setReportsList(reports)
        return [reports, yearsReports]
    }
    const openCreateReportModal = () => {
        setVisible(true)
    }

    useEffect(()=>{
        getReports()
    }, [LOGIN.loginApp, LOGIN.hash])

    return (
        <div className={styles.main}>
            <CreateNewReportScreen visible={visible} setVisible={setVisible}/>
            <div className={styles.wrapper}>
                <div className={styles.wrapper2}>
                    <MyAssets/>
                    <InvestmentPortfolio />
                    <MyDebts/>
                </div>
                <div className={styles.wrapper3}>
                    <TopBar/>
                    <div className={styles.wrapper4}>
                        <Incomes/>
                        <Expenditure/>
                    </div>
            
                </div>
            </div>
            
            <UserController reportList={reportsList} yearReportList={yearReportList} clickOpenModal={openCreateReportModal}/>
        </div>
    );
});

export default MainPage;