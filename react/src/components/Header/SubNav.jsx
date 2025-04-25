import React from 'react';
import Camera from '../../assets/svg/Camera.svg';
import Computer from '../../assets/svg/Computer.svg';
import Headphones from '../../assets/svg/Headphones.svg';
import Phone from '../../assets/svg/Phone.svg';
import SmartWatches from '../../assets/svg/SmartWatches.svg';

const SubNav = () => {
    return (
        <>
            <style>
                {`
                    .subnav {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        background-color: #333;
                        padding: 10px 0;
                        color: white;
                    }
                    .subnav-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        margin: 0 15px; /* Added separation between items */
                    }
                    .subnav-item img {
                        width: 30px; /* Adjust size as needed */
                        height: 30px;
                        margin-bottom: 5px;
                    }
                    .subnav-item span {
                        font-size: 14px;
                    }
                    .subnav-item:hover {
                        color: #00bcd4;
                    }
                `}
            </style>
            <div className="subnav">
                <div className="subnav-item">
                    <img src={Phone} alt="Phones" />
                    <span>Phones</span>
                </div>
                <div className="subnav-item">
                    <img src={Computer} alt="Computers" />
                    <span>Computers</span>
                </div>
                <div className="subnav-item">
                    <img src={SmartWatches} alt="Smart Watches" />
                    <span>Smart Watches</span>
                </div>
                <div className="subnav-item">
                    <img src={Camera} alt="Cameras" />
                    <span>Cameras</span>
                </div>
                <div className="subnav-item">
                    <img src={Headphones} alt="Headphones" />
                    <span>Headphones</span>
                </div>
            </div>
        </>
    );
};

export default SubNav;