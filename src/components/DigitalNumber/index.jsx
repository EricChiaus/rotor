import React from 'react';
import './index.css';

// number: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'zero';

const DigitalNumber = ({ number = 'zero' }) => (
    <div className={`${number} digit`}>
        <span className="d1"></span>
        <span className="d2"></span>
        <span className="d3"></span>
        <span className="d4"></span>
        <span className="d5"></span>
        <span className="d6"></span>
        <span className="d7"></span>
    </div>
);

export default DigitalNumber;
