import React, {useState} from 'react';
import LoginInput from '../../UI/LoginInput/LoginInput';
import { LogintoApp } from '../../API/api';
import { observer } from 'mobx-react-lite';
import LOGIN from '../../STORE/LOGIN';
import './loginPage.scss';

const LoginPage: React.FC = observer(() => {
    const [loginValue, setLoginValue] = useState<{login:string, password:string}>({login: 'Vlad', password: '1'})

    const loginClick = async (e:any) => {
        e.preventDefault()
        const res = await LogintoApp(loginValue.login, loginValue.password)
        console.log(res)
        if(res.length){
            LOGIN.addInfoUser(res[0].userName, res[0].id, res[0].activGoal)
            LOGIN.setLogin(true)
            
        } else {
            console.log('false login')
        }
    }

    return (
        <section className="loginPage">
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <img src="./icons/illustration.png" alt="illustration" className="illustration" />
                    <div className="div-title">
                        <p className='par p1'>В</p>
                        <p className='par p2'>х</p>
                        <p className='par p3'>о</p>
                        <p className='par p4'>д</p>
                    </div>
                    <form>
                        <LoginInput 
                            value={loginValue.login}
                            onChange = {e => setLoginValue({...loginValue, login: e.target.value})}
                            placeholder='Логин'
                            type='text'
                        />
                        <LoginInput 
                            value={loginValue.password}
                            onChange = {e => setLoginValue({...loginValue, password: e.target.value})}
                            placeholder='Пароль'
                            type='text'
                        />
                        <button onClick={loginClick}>войти</button>
                    </form>

                    <div className="register-forget opacity">
                        <a href="">CREATED BY VLAD•NIKO</a>
                    </div>
                </div>
                <div className="circle circle-two"></div>
            </div>
        </section>

    );
});

export default LoginPage;