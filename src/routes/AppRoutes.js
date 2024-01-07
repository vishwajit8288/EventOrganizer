import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from '../components/UI/Navbr'
import User from '../pages/User';
const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='user' element={<User/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;