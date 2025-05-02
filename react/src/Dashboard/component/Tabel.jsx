import React from 'react';

const Table = ({ columns, data }) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontFamily: 'Arial, sans-serif',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '12px',
                                    textAlign: 'left',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            style={{
                                backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : 'white',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = '#f1f1f1')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    rowIndex % 2 === 0 ? '#f9f9f9' : 'white')
                            }
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {column.type === 'image' ? (
                                        <img
                                            src={
                                                Array.isArray(row[column.accessor]) && row[column.accessor].length > 0
                                                    ? row[column.accessor][0]
                                                    : 'https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image'
                                            }
                                            alt={column.header}
                                            style={{ maxWidth: '25px', maxHeight: '25px' }}
                                            onError={(e) => (e.target.src = 'https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image')}
                                        />
                                    ) : column.type === 'boolean' && column.accessor === 'isActive' ? (
                                        row[column.accessor] ? '✔️' : '❌'
                                    ) : (
                                        row[column.accessor]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;