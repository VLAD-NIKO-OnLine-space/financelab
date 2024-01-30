import { makeAutoObservable } from "mobx";


class CREATEREPORT {
    reportType:'год'|'месяц' = 'месяц' 
    newMonth:string|null = null
    newYear:string|null = null
    

    constructor(){
        makeAutoObservable(this)
    }

    addReportType(item:'год'|'месяц'){
        this.reportType = item
    }

    addMonth(month:string){
        this.newMonth = month
    }
    addYear(year:string){
        this.newYear = year
    }
    removeNewMonth(){
        this.newMonth = null
    }
}

export default new CREATEREPORT()