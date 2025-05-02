import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import SubNav from './SubNav';

const DesktopHeader = () => {
    const location = useLocation();

    if (location.pathname.startsWith('/dashboard')) {
        return null; // Hide the header
    }

    return (
        <>
            <HeaderTop />
            <SubNav />
        </>
    );
};

export default DesktopHeader;