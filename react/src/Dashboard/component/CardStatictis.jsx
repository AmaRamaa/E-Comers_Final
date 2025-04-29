import React from 'react';
import PropTypes from 'prop-types';

const CardStatistics = ({ type, number, showDollar }) => {
    return (
        <div style={styles.card}>
            <h2 style={styles.number}>
                {number !== undefined ? (showDollar ? `$${number}` : number) : 'N/A'}
            </h2>
            <p style={styles.type}>{type}</p>
        </div>
    );
};

CardStatistics.propTypes = {
    type: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showDollar: PropTypes.bool,
};

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25vh',
        height: '100px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    number: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#4a90e2',
        margin: 0,
    },
    type: {
        fontSize: '14px',
        color: '#666',
        margin: 0,
    },
};

export default CardStatistics;