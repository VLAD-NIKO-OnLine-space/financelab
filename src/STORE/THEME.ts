import { makeAutoObservable } from "mobx";


class THEME {

    constructor(){
        makeAutoObservable(this)
    }

    setTheme(){
        if(localStorage.getItem('themeMode')==='dark'){
            localStorage.removeItem('themeMode')
            localStorage.setItem('themeMode', 'light')
            document.documentElement.style.setProperty("--card-color", "#fff")
            document.documentElement.style.setProperty("--text-color", "#333")
            document.documentElement.style.setProperty("--bg-color", "#d19f9f")
            document.documentElement.style.setProperty("--card-color-hover", "#ffe7e7")
            document.documentElement.style.setProperty("--card-item-color-hover", "#91baffb3")
            document.documentElement.style.setProperty("--all-text-color", "#ad00ff")

        } else if(localStorage.getItem('themeMode')==='light'){
            localStorage.removeItem('themeMode')
            localStorage.setItem('themeMode', 'dark')
            document.documentElement.style.setProperty("--card-color", "#181b3a")
            document.documentElement.style.setProperty("--text-color", "#fff")
            document.documentElement.style.setProperty("--bg-color", "#090d28")
            document.documentElement.style.setProperty("--card-color-hover", "#23285a")
            document.documentElement.style.setProperty("--card-item-color-hover", "#090e2ab3")
            document.documentElement.style.setProperty("--all-text-color", "#ffd700")

        }
    }

    resetToDarkTheme(){
        localStorage.removeItem('themeMode')
        localStorage.setItem('themeMode', 'dark')
        document.documentElement.style.setProperty("--card-color", "#181b3a")
        document.documentElement.style.setProperty("--text-color", "#fff")
        document.documentElement.style.setProperty("--bg-color", "#090d28")
        document.documentElement.style.setProperty("--card-color-hover", "#23285a")
        document.documentElement.style.setProperty("--card-item-color-hover", "#090e2ab3")
        document.documentElement.style.setProperty("--all-text-color", "#ffd700")

    }
}

export default new THEME()

// 