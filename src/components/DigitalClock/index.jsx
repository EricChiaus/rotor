import React from 'react';
import { digitToName, numberToDigits } from '../../helpers/digits';
import DigitalNumber from '../DigitalNumber';
import Dots from '../Dots';
import './index.css';

const DigitalClock = ({ hours, minutes, seconds }) => (
    <div className="digital-clock">
        <DigitalNumber number={digitToName(numberToDigits(hours).high)} />
        <DigitalNumber number={digitToName(numberToDigits(hours).low)} />
        <Dots />
        <DigitalNumber number={digitToName(numberToDigits(minutes).high)} />
        <DigitalNumber number={digitToName(numberToDigits(minutes).low)} />
        <Dots />
        <DigitalNumber number={digitToName(numberToDigits(seconds).high)} />
        <DigitalNumber number={digitToName(numberToDigits(seconds).low)} />
    </div>
);

export default DigitalClock;
