import { makeAutoObservable } from "mobx";


class LOGIN {

    loginApp=false
    // логин уникален для всего!!!!
    userName:string = ''
    id:number|null = null
    myGoal:number|string = ''

    hash:number = 1

    constructor(){
        makeAutoObservable(this)
    }

    setLogin(state:boolean){
        state ? this.loginApp = true : this.loginApp = false
        if(state===false){
            this.userName = ''
        }
    }
    addInfoUser(user:string, ID:number, GOAL:string|number){
        this.userName=user
        this.id = ID
        this.myGoal = GOAL
        localStorage.setItem('themeMode', 'dark')
    }
    addMyGoal(newGoal:number|string){
        this.myGoal = newGoal
    }

    setHash(){
        this.hash = Math.random()
    }
}


export default new LOGIN()