import React, { useEffect, useState } from 'react';
import Table from '../component/Tabel.jsx';
import { supabase } from "../../db/supabaseClient.js";


const Members = () => {
    const [membersData, setMembersData] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Username', accessor: 'username' },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone', accessor: 'phone' },
        { header: 'Admin Level', accessor: 'adminlevel' },
    ];

    useEffect(() => {
        const fetchMembers = async () => {
            const { data, error } = await supabase.from('Users').select('*');
            if (error) {
                console.error('Error fetching members:', error);
            } else {
                setMembersData(data);
            }
            setLoading(false);
        };

        fetchMembers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Members</h1>
            <Table columns={columns} data={membersData} />
        </>
    );
};

export default Members;