import React, { useState } from 'react';

const Inquires = () => {
    const [inquiries, setInquiries] = useState([]);
    const [newInquiry, setNewInquiry] = useState('');

    const handleAddInquiry = () => {
        if (newInquiry.trim()) {
            setInquiries([...inquiries, newInquiry]);
            setNewInquiry('');
        }
    };

    return (
        <div>
            <h1>Inquiries Page</h1>
            <p>This is the Inquiries page where you can manage all inquiries.</p>
            
            <div>
                <h2>Add a New Inquiry</h2>
                <input
                    type="text"
                    value={newInquiry}
                    onChange={(e) => setNewInquiry(e.target.value)}
                    placeholder="Enter inquiry"
                />
                <button onClick={handleAddInquiry}>Add Inquiry</button>
            </div>

            <div>
                <h2>Inquiry List</h2>
                {inquiries.length > 0 ? (
                    <ul>
                        {inquiries.map((inquiry, index) => (
                            <li key={index}>{inquiry}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No inquiries yet.</p>
                )}
            </div>
        </div>
    );
};

export default Inquires;