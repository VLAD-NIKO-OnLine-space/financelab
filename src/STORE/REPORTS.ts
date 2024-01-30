import { makeAutoObservable } from "mobx";
import { toJS } from "mobx";

class REPORTS {
    // data
    month:string = ''
    year: number|null = null
    // assets
    myCrypto:number = 0
    myStocks:number= 0
    myWallet:number = 0

    myCryptoInRUB:number = 0

    // debts
    myDebts: {[key:string]:string|number} = {}
    
    // incomes
    myActiveIncomes:number = 0
    myPassiveIncomes:number = 0
    activeIncomes:{[key:string]:string|number}[] = []
    passiveIncomes:{[key:string]:string|number}[] = []

    // expenditure
    myExpenditure:number = 0
    allExpenditure:{[key:string]:string|number}[] = []
    
    constructor(){
        makeAutoObservable(this)
    }


    addData(newMonth:string, newYear:number){
        this.month = newMonth
        this.year = newYear
    }

    addCryproInRUB(newPrice:number){
        this.myCryptoInRUB = newPrice
    }

    addAssets(crypto:number, stocks:number, wallet:number){
        this.myCrypto = crypto
        this.myStocks = stocks
        this.myWallet = wallet
    }

    addDebts(item: {[key:string]:string|number}){
        let newObj:any = new Object()
        for (const [key, value] of Object.entries(item)) {
            if(key!=='userName' && key !=='year' && key !=='month' && key !=='id'){
                newObj[key] = value
            }
            this.myDebts = newObj
          }
    }

    addActiveIncomes(item: {[key:string]:string|number}[]){
        this.activeIncomes = item
        this.countActiveIncomesSumm()
    }
    addPassiveIncomes(item: {[key:string]:string|number}[]){
        this.passiveIncomes = item
        this.countPassiveIncomesSumm()
    }
    addExpenditure(item: {[key:string]:string|number}[]){
        this.allExpenditure = item
        this.countExpenditure()
    }
    countExpenditure(){
        this.myExpenditure = 0
        const allExpenditure = toJS(this.allExpenditure)
        if(allExpenditure.length){
            allExpenditure.forEach(e => {
                if(e.hasOwnProperty('expenditurePrice') && typeof e.expenditurePrice === 'number'){
                    this.myExpenditure = this.myExpenditure + e.expenditurePrice
                } else if(e.hasOwnProperty('expenditurePrice') && typeof e.expenditurePrice === 'string'){
                    this.myExpenditure = this.myExpenditure + Number(e.expenditurePrice)
                }
            })
        }
    }

    countActiveIncomesSumm(){
        this.myActiveIncomes = 0
        const allActivIncome = toJS(this.activeIncomes)
        if(allActivIncome.length){
            allActivIncome.forEach(e => {
                if(e.hasOwnProperty('incomePrice') && typeof e.incomePrice === 'number'){
                    this.myActiveIncomes = this.myActiveIncomes + e.incomePrice
                } else if(e.hasOwnProperty('incomePrice') && typeof e.incomePrice === 'string'){
                    this.myActiveIncomes = this.myActiveIncomes + Number(e.incomePrice)
                }
            })
        }
    }

    countPassiveIncomesSumm(){
        this.myPassiveIncomes = 0
        const allPassIncome = toJS(this.passiveIncomes)
        if(allPassIncome.length){
            allPassIncome.forEach(e => {
                if(e.hasOwnProperty('incomePrice') && typeof e.incomePrice === 'number'){
                    this.myPassiveIncomes = this.myPassiveIncomes + e.incomePrice
                } else if(e.hasOwnProperty('incomePrice') && typeof e.incomePrice === 'string'){
                    this.myPassiveIncomes = this.myPassiveIncomes + Number(e.incomePrice)
                }
            })
        }
    }
    
}


export default new REPORTS();