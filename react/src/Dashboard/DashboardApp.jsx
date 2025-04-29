import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './component/SideBar.jsx';
import Header from './component/Header.jsx';
import Container from './component/Container.jsx';

function App() {
    const [inPutItem, setInPutItem] = useState("");

    const handleInputChange = (value) => {
        setInPutItem(value);
    };

    const handleItemSelect = (item) => {
        setInPutItem(item);
    };

    return (
        <div className="d-flex vh-100">
            <div className="bg-light p-3" style={{ width: '250px' }}>
                <SideBar outPutItem={inPutItem} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-grow-1 d-flex flex-column p-3">
                <div className="bg-light p-3 mb-3 rounded shadow-sm text-center">
                    <Header selectedItem={inPutItem} />
                </div>
                <div className="flex-grow-1 bg-light p-4 rounded shadow-sm overflow-auto">
                    <Container inPutItem={inPutItem} onInputChange={handleInputChange} />
                </div>
            </div>
        </div>
    );
}

export default App;
