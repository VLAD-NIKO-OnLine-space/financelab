import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../PAGES/MainPage/MainPage';
import LoginPage from '../PAGES/LoginPage/LoginPage';
import { observer } from 'mobx-react-lite';
import LOGIN from '../STORE/LOGIN';

const AppRouter: React.FC = observer(() => {
    return (
        <BrowserRouter>
        {
            LOGIN.loginApp
            ?
            <Routes>
                <Route path='/' element={<MainPage/>}></Route> 
                
            </Routes>
            :
            <Routes>
                <Route path='/' element={<LoginPage/>}></Route>
 
            </Routes>
        }
            
        </BrowserRouter>
    );
});

export default AppRouter; 