import axios from "axios"

export const LogintoApp = async (login:string, password: string) => {
    const allUsers = await axios.get(`http://localhost:3001/users`)
    const responce = await allUsers.data.filter((el: { userName: string; password: string }) =>
        el.userName === login && el.password === password)
    return await responce
}

export const RepathGoal = async (ID:number|null, newGoal:string) => {
    await axios.patch(`http://localhost:3001/users/${ID}`, {activGoal: Number(newGoal)})
    const responce = await axios.get(`http://localhost:3001/users/${ID}`)
    return responce.data
}

export const getAllYearReport =async (userName: string) => {
    const responce = await axios.get(`http://localhost:3001/yearsReports?userName=${userName}`)
    return responce.data
}

export const getReportByUserName = async (userName:string|null) => {
    const responce = await axios.get(`http://localhost:3001/reports?userName=${userName}`)
    return responce.data
}


export const getAllInfoByUserName_Month_year =async (userName: string, month:string, year:number) => {
    const allAssets = await axios.get(`http://localhost:3001/assets?userName=${userName}&year=${year}&month=${month}`)
    return allAssets.data[0]
}

export const createReportUser = async (item: { userName: string; month: string; year: string; }) => {
   await axios.post('http://localhost:3001/reports', item)
}

export const getBebtsBy_UserName_Year = async (userName: string, month:string, year:number) => {
    const allDebts = await axios.get(`http://localhost:3001/debts?userName=${userName}&year=${year}&month=${month}`)
    return allDebts.data[0]
}

export const PostNewDebts = async () => {
    await axios.patch(`http://localhost:3001/debts/1`, {
        year: 2323
    })
}

export const getActiveIncomes = async (userName: string, month:string, year:number) => {
    const allActiveIncomes =  await axios.get(`http://localhost:3001/ActiveIncomes?userName=${userName}&year=${year}&month=${month}`)
    return allActiveIncomes.data
}

export const PostNewActiveIncome = async (obj: {userName: string, month:string, year:number, incomeName:string, incomePrice:string}) => {
    await axios.post('http://localhost:3001/ActiveIncomes', obj)
    const newListActiveIncomes = await getActiveIncomes(obj.userName, obj.month, obj.year)
    return newListActiveIncomes
}

export const getPassiveIncomes = async (userName: string, month:string, year:number) => {
    const allActiveIncomes =  await axios.get(`http://localhost:3001/PassiveIncomes?userName=${userName}&year=${year}&month=${month}`)
    return allActiveIncomes.data
}

export const PostNewPassiveIncome = async (obj: {userName: string, month:string, year:number, incomeName:string, incomePrice:string}) => {
    await axios.post('http://localhost:3001/PassiveIncomes', obj)
    const newListPassiveIncomes = await getPassiveIncomes(obj.userName, obj.month, obj.year)
    return newListPassiveIncomes
}

export const getAllExpenditure = async (userName: string, month:string, year:number) => {
    const allExpenditure = await axios.get(`http://localhost:3001/expenditure?userName=${userName}&year=${year}&month=${month}`)
    return allExpenditure.data
}

export const PostNewExpenditure = async (obj: {userName: string, month:string, year:number, incomeName:string, incomePrice:string}) => {
    await axios.post('http://localhost:3001/expenditure', obj)
    const newListExpenditure = await getAllExpenditure(obj.userName, obj.month, obj.year)
    return newListExpenditure
}

export const PostNewReport = async (userName: string, month:string, year:string) => {
    await axios.post('http://localhost:3001/reports', {
        userName: userName,
        month: month,
        year: year
    }
    )
}