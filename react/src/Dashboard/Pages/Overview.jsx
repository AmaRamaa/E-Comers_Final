import React from 'react';
import CardStatistics from '../component/CardStatictis.jsx';

const Overview = () => {
    return (
        <>
            <h1>Overview</h1>
            <div className="cardStatisticsContainer" style={styles.cardStatisticsContainer}>
                {/* {analyticsData.map((data, index) => (
                    <CardStatistics 
                        key={index} 
                        type={data.type} 
                        number={data.number ? data.number : 'N/A'} 
                        showDollar={data.showDollar ? data.showDollar : false} 
                    />
                ))} */}
                PLACEHOLDER
            </div>
            <div className='table-Container' style={styles.tableContainer}>
                {/* <Table
                    columns={[
                        { header: 'Type', accessor: 'type' },
                        { header: 'Number', accessor: 'number' },
                    ]}
                    data={analyticsData}
                /> */}
                placeholder for table
            </div>
        </>
    );
};

const styles = {    
    cardStatisticsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    tableContainer: {
        marginTop: '20px',
        overflowX: 'auto',
    },
};

export default Overview;