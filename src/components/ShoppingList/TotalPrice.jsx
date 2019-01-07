import React from 'react';
import { Well } from 'react-bootstrap';

const WellStyle = {
    fontSize: '12pt',
    fontWeight: 'bold'
}

const TotalPrice = ({ cart }) => {
    const getTotalValue = () => {
        const aPrices = cart.map(product => product.price);
        return aPrices.reduce((total, currentValue) => total + currentValue, 0).toFixed(2);
    }
    const total = getTotalValue();
    return (
        <Well style={WellStyle}>
            { `Total: ${total} $` }
        </Well>
    );
};

export default TotalPrice;