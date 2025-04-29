import React, { useState, useEffect } from 'react';
import Overview from '../Pages/Overview'; // Ensure the file exists and has the correct name
import Analytics from '../Pages/Analytics';
import ProductsTable from '../Pages/ProductsTable';
import Tags from '../Pages/Tags';
import Members from '../Pages/Members';
import Inquiries from '../Pages/Inquiries'; // Corrected the spelling of "Inquiries"
// import ProductsStore from '../Pages/ProductsStore.jsx'; // Ensure the file exists and has the correct extension
// import ProductsCreate from '../Pages/ProductsCreate.jsx'; // Ensure the file exists and has the correct extension


const Container = ({ inPutItem }) => {

    const [activePage, setActivePage] = useState('Overview'); // Default to 'Overview'

    useEffect(() => {
        setActivePage(inPutItem || 'Overview');
    }, [inPutItem]);

    const renderContent = () => {
        switch (activePage) {
            case 'Overview':
                return <Overview />;
            case 'Analytics':
                return <Analytics />;
            case 'ProductsTable':
                return <ProductsTable />;
            case 'Tags+':
                return <Tags />;
            case 'Members':
                return <Members />;
            case 'Inquiries':
                return <Inquiries />;
            // case 'ProductsStore':
            //     return <ProductsStore />;
            // case 'ProductsCreate':
            //     return <ProductsCreate />;
            default:
                return <h1>Page not found </h1>;
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default Container;