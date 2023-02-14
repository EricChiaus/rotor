import React, { useContext } from 'react';
import { TimeContext } from '../../contexts/TimeContext';
import AnalogClock from '../AnalogClock';

const AnalogClockLayer = () => {
    const { hours, minutes, seconds } = useContext(TimeContext);
    return <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />;
};

export default AnalogClockLayer;
