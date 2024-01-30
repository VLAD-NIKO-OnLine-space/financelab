import React from 'react';
import styles from './ReportButton.module.scss'

interface ReportButtonProps {
    month: string,
    year: number,
    handleClick: (month:string, year: number) => void
}

const ReportButton: React.FC<ReportButtonProps> = ({ month, year, handleClick }) => {
    
    const click = () => {
        handleClick( month, year )
    }
    return (
        <button onClick={click} className={styles.ReportButton}>
                <img src="./icons/calendar.svg" className={styles.icon} />
                <p>{month}</p>
                <span></span>
                <p>{year}</p>
        </button>
    );
};

export default ReportButton;