import { getAllInfoByUserName_Month_year } from "../../API/api"
import LOGIN from "../../STORE/LOGIN"
import REPORTS from "../../STORE/REPORTS"

const allAssets = await getAllInfoByUserName_Month_year(LOGIN.userName, month, year)
        REPORTS.addAssets(allAssets.crypto, allAssets.stocks, allAssets.wallet)
        REPORTS.addData(month, year)
        const allDebts = await getBebtsBy_UserName_Year(LOGIN.userName, month, year)
        REPORTS.addDebts(allDebts)

        const allActiveIncomes = await getActiveIncomes(LOGIN.userName, month, year)
        REPORTS.addActiveIncomes(allActiveIncomes)

        const allPassiveIncomes = await getPassiveIncomes(LOGIN.userName, month, year)
        REPORTS.addPassiveIncomes(allPassiveIncomes)