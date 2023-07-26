import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Profile from './Profile';
import { Home } from './Home';
import Breeds from './Breeds';

export default function Layout(props) {
    return (
        <div className='layout-container'>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/breeds' Component={Breeds} />
                <Route path='/about' Component={About} />
                <Route path='/profile' Component={Profile} />
            </Routes>
        </div>
    );
}
