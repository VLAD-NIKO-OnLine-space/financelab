import React from 'react';
import styles from './TopBar.module.scss'
import { observer } from 'mobx-react-lite';
import REPORTS from '../../STORE/REPORTS';

interface TopBarProps {
    
}

const TopBar: React.FC<TopBarProps> = observer(() => {
    return (
        <div className={styles.main}>
            {/* <span className={styles.t1}></span> */}
            <h1 className={styles.title}>отчёт за: <span>{REPORTS.month} | {REPORTS.year}</span> </h1>
        </div>
    );
});

export default TopBar;