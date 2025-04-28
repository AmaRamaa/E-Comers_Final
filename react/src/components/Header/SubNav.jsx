import React from 'react';
import Camera from '../../assets/svg/Camera.svg';
import Computer from '../../assets/svg/Computer.svg';
import Headphones from '../../assets/svg/Headphones.svg';
import Phone from '../../assets/svg/Phone.svg';
import SmartWatches from '../../assets/svg/SmartWatches.svg';

const SubNav = () => {
    return (
        <div className="bg-dark text-white sticky-top py-2" style={{ zIndex: 999 , padding: '10px 0', top: "56px" }}>
            <div className="container d-flex justify-content-around align-items-center">
                <div className="text-center">
                    <img src={Phone} alt="Phones" className="mb-1" style={{ width: '30px', height: '30px' }} />
                    <div>Phones</div>
                </div>
                <div className="text-center">
                    <img src={Computer} alt="Computers" className="mb-1" style={{ width: '30px', height: '30px' }} />
                    <div>Computers</div>
                </div>
                <div className="text-center">
                    <img src={SmartWatches} alt="Smart Watches" className="mb-1" style={{ width: '30px', height: '30px' }} />
                    <div>Smart Watches</div>
                </div>
                <div className="text-center">
                    <img src={Camera} alt="Cameras" className="mb-1" style={{ width: '30px', height: '30px' }} />
                    <div>Cameras</div>
                </div>
                <div className="text-center">
                    <img src={Headphones} alt="Headphones" className="mb-1" style={{ width: '30px', height: '30px' }} />
                    <div>Headphones</div>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
