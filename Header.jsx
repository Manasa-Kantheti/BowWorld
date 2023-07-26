import * as React from 'react';
import Logo from '../assets/logo64.png'
import { Link } from 'react-router-dom';
import './header.css'
import { useLocation } from 'react-router-dom';

export default function Header() {

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <div className='d-flex justify-between w-p-100 main-header'>
            <Link to={'/'} className='d-flex'>
                <img src={Logo} alt="Logo" className='logo c-pointer' />
                <span className='my-auto logo-text'>BowWorld</span>
            </Link>
            <nav className='d-flex px-3 my-auto'>
                <div className='px-1'>
                    <Link to={'/'} className={`nav-item nav-item-ltr c-pointer ${usePathname() === '/' && 'nav-item-active'}`}>Home</Link>
                </div>
                <div className='px-1'>
                    <Link to={'/breeds'} className={`nav-item nav-item-ltr c-pointer ${usePathname() === '/breeds' && 'nav-item-active'}`}>Breeds</Link>
                </div>
                <div className='px-1'>
                    <Link to={'/about'} className={`nav-item nav-item-ltr c-pointer ${usePathname() === '/about' && 'nav-item-active'}`}>About</Link>
                </div>
                <div className='px-1'>
                    <Link to={'/profile'} className={`nav-item nav-item-ltr c-pointer ${usePathname() === '/profile' && 'nav-item-active'}`}>Profile</Link>
                </div>
            </nav>
        </div>
    );
}
