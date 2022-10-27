import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages';
import SignInPage from './Pages/signIn'

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/signIn'} element={<SignInPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
