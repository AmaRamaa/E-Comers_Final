import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ isLoading, lastUpdated, userName, userStatus }) => {
    return (
        <div className="d-flex justify-content-between align-items-center p-3 bg-light">
            <div className="d-flex flex-column">
                {isLoading ? (
                    <div className="progress w-100 mt-2">
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                            role="progressbar"
                            style={{ width: '100%' }}
                        ></div>
                    </div>
                ) : (
                    <span className="text-success">Data Loaded</span>
                )}
                <span className="text-muted fst-italic">Last updated: {lastUpdated || 'N/A'}</span>
            </div>
            <div className="d-flex flex-column align-items-end">
                <img
                    src={`https://picsum.photos/seed/${Math.random()}/300/300`}
                    alt="User Avatar"
                    className="rounded-circle mb-2"
                    style={{ width: '40px', height: '40px' }}
                />
                <span className="fw-bold text-dark">{userName || 'User'}</span>
                <span className="text-secondary">{userStatus || 'N/A'}</span>
            </div>
        </div>
    );
};

export default Header;