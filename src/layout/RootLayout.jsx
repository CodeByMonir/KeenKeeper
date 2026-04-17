import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';

const RootLayout = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitle = {
            "/": "Home - KeenKeeper",
            "/timeline": "Timeline - KeenKeeper",
            "/stats": "Statistics - KeenKeeper",
        };
        
        document.title = pageTitle[location.pathname] || "KeenKeeper";

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [location.pathname]);

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;