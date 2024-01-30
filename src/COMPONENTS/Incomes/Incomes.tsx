import React from 'react';
import ActiveIncomes from './ActiveIncomes/ActiveIncomes';
import PassiveIncomes from './PassiveIncomes/PassiveIncomes';
import styles from './Incomes.module.scss'
import REPORTS from '../../STORE/REPORTS';
import { observer } from 'mobx-react-lite';

const Incomes: React.FC = observer(() => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Доходы</h1>
            <ActiveIncomes/>
            <PassiveIncomes/>
            <span className={styles.line}></span>
            <p className={styles.allIncomes}>Всего доходов: <span>{(REPORTS.myActiveIncomes + REPORTS.myPassiveIncomes).toLocaleString()} ₽</span></p>
        </div>
    );
});

export default Incomes;