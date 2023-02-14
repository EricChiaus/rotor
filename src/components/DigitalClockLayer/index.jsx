import React, { useContext } from 'react';
import { TimeContext } from '../../contexts/TimeContext';
import DigitalClock from './../DigitalClock';

const DigitalClockLayer = () => {
    const { hours, minutes, seconds } = useContext(TimeContext);
    return <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />;
};

export default DigitalClockLayer;
