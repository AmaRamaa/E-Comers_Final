import React from 'react';
import Table from '../component/Tabel.jsx';
// import membersData from '../data/Users/Users.js'; // Corrected the path

const Members = () => {
    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Age', accessor: 'age' },
        { header: 'Active', accessor: 'isActive', type: 'boolean' },
        { header: 'Profile', accessor: 'profile' },
        { header: 'Last Login', accessor: 'lastLogin', type: 'date' },
    ];

    return (
        <>
            <h1>Members</h1>
            {/* <Table columns={columns} data={membersData} /> */}
            PLACEHOLDER
        </>
    );
};

export default Members;