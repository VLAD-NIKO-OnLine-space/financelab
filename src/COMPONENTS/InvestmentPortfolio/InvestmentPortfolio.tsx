import React from 'react';
import styles from './InvestmentPortfolio.module.scss'
import { observer } from 'mobx-react-lite';
import REPORTS from '../../STORE/REPORTS';

interface InvestmentPortfolioProps {
    
}

const InvestmentPortfolio: React.FC<InvestmentPortfolioProps> = observer(() => {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Активы</h1>
            <div className={styles.wrapper}>
                <img src="./icons/crypto.png" className={styles.icon}/>
                <div className={styles.priceWrapper}>
                    <h2 className={styles.priceName}>Криптовалюта</h2>
                    <p className={styles.price}>{REPORTS.myCrypto.toLocaleString()} $ | <span>{REPORTS.myCryptoInRUB.toLocaleString()} ₽</span></p>
                </div>
            </div>

            <div className={styles.wrapper}>
                <img src="./icons/stock.png" className={styles.icon}/>
                <div className={styles.priceWrapper}>
                    <h2 className={styles.priceName}>Ценные бумаги</h2>
                    <p className={styles.price}>{REPORTS.myStocks.toLocaleString()} ₽</p>
                </div>
            </div>

            <div className={styles.wrapper}>
                <img src="./icons/wallet.png" className={styles.icon}/>
                <div className={styles.priceWrapper}>
                    <h2 className={styles.priceName}>Сбережения</h2>
                    <p className={styles.price}>{REPORTS.myWallet.toLocaleString()} ₽</p>
                </div>
            </div>
        </div>
    );
});

export default InvestmentPortfolio;