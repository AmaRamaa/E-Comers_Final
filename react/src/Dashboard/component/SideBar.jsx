import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ onItemSelect }) => {
    const navigate = useNavigate();

    const handleItemClick = (item) => {
        localStorage.setItem('activeSidebarItem', item);
        const items = document.querySelectorAll('.sidebar-item, .sidebar-item-mod');
        items.forEach((el) => el.classList.remove('active'));
        const clickedItem = Array.from(items).find((el) => el.textContent === item);
        if (clickedItem) clickedItem.classList.add('active');

        // Map item names to routes
        const routeMap = {
            Overview: '/dashboard/overview',
            Analytics: '/dashboard/analytics',
            Inquiries: '/dashboard/inquiries',
            Members: '/dashboard/members',
            ProductsStore: '/dashboard/products-store',
            ProductsCreate: '/dashboard/products-create',
            ProductsTable: '/dashboard/products-table',
        };

        if (routeMap[item]) {
            navigate(routeMap[item]); // Navigate to the corresponding route
        }

        onItemSelect(item); // Notify the parent container about the selected item
    };

    const [showSubMenu, setShowSubMenu] = React.useState(false);

    const handleSubMenuToggle = () => {
        setShowSubMenu(!showSubMenu);
    };

    if (!localStorage.getItem('activeSidebarItem')) {
        localStorage.setItem('activeSidebarItem', 'Overview');
    }

    if (localStorage.getItem('activeSidebarItem') === 'ProductsTable' || localStorage.getItem('activeSidebarItem') === 'ProductsStore' || localStorage.getItem('activeSidebarItem') === 'ProductsCreate') {
        const items = document.querySelectorAll('.sidebar-item-mod');
        const clickedItem = Array.from(items).find((el) => el.textContent.includes('Products +'));
        if (clickedItem) clickedItem.classList.add('active');
    }

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredItems = [
        { name: 'Overview', type: 'item' },
        { name: 'Analytics', type: 'item' },
        { name: 'Products +', type: 'submenu', subItems: ['ProductsTable', 'ProductsStore', 'ProductsCreate', 'ProductsEdit'] },
        { name: 'Tags+', type: 'item' },
        { name: 'Members', type: 'item' },
        { name: 'Inquiries', type: 'item' },
    ].filter((item) => {
        if (item.type === 'submenu') {
            return item.name.toLowerCase().includes(searchTerm) || item.subItems.some((subItem) => subItem.toLowerCase().includes(searchTerm));
        }
        return item.name.toLowerCase().includes(searchTerm);
    });

    return (
        <div className="d-flex flex-column bg-light p-3 rounded shadow" style={{ width: '250px', height: '92vh' }}>
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigate(-1)} // Navigate back to the previous page
                >
                    Back
                </button>
                <h3>placeholder</h3>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <ul className="list-unstyled">
                {filteredItems.map((item) => {
                    if (item.type === 'submenu') {
                        return (
                            <li
                                className={`p-2 mb-2 rounded ${showSubMenu ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                                key={item.name}
                                onClick={handleSubMenuToggle}
                                style={{ cursor: 'pointer' }}
                            >
                                {item.name}
                                {showSubMenu && (
                                    <ul className="list-unstyled ps-3">
                                        {item.subItems.map((subItem) => (
                                            <li
                                                className="p-2 mb-1 rounded bg-light text-dark"
                                                key={subItem}
                                                onClick={() => handleItemClick(subItem)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    }
                    return (
                        <li
                            className="p-2 mb-2 rounded bg-light text-dark"
                            key={item.name}
                            onClick={() => handleItemClick(item.name)}
                            style={{ cursor: 'pointer' }}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;