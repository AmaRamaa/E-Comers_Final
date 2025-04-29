import React from 'react';
// import { BarChart } from '@mui/x-charts';
// import fakeAnalyticsData from '../data/Fake/Fake';

const Analytics = () => {
    // const chartData = {
    //     months: fakeAnalyticsData.map(data => data.month),
    //     users: fakeAnalyticsData.map(data => data.users),
    //     sales: fakeAnalyticsData.map(data => data.sales),
    //     revenue: fakeAnalyticsData.map(data => data.revenue),
    // };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9'}}>
            <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Analytics</h1>
            <div
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}
            >
                <h1>    Currently Disabeled</h1>
                {/* <BarChart
                    xAxis={[
                        {
                            id: 'months',
                            data: chartData.months,
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: chartData.users,
                            label: 'Users',
                        },
                        {
                            data: chartData.sales,
                            label: 'Sales',
                        },
                        {
                            data: chartData.revenue,
                            label: 'Revenue',
                        },
                    ]}
                    width={Math.min(700, window.innerWidth - 40)}
                    height={400}
                    overflow="hidden"
                    margin={{ top: 20, right: 20, bottom: 50, left: 40 }}
                /> */}
            </div>
        </div>
    );
};

export default Analytics;