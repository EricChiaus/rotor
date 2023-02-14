import React, { useEffect, useRef } from 'react';
import {
    getHoursAngle,
    getMinutesAngle,
    getSecondsAngle,
} from '../../helpers/angles';
import './index.css';

// hours: 0~23
// minutes: 0~59
// seconds: 0-59
const AnalogClock = ({ hours, minutes, seconds }) => {
    const hoursRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);

    useEffect(() => {
        hoursRef.current.style.transform = `rotateZ(${getHoursAngle(
            hours,
            minutes,
        )}deg`;
        minutesRef.current.style.transform = `rotateZ(${getMinutesAngle(
            minutes,
        )}deg`;
        secondsRef.current.style.transform = `rotateZ(${getSecondsAngle(
            seconds,
        )}deg`;
    }, [hours, minutes, seconds]);

    return (
        <div className="analog-clock">
            <div className="hours" ref={hoursRef}></div>
            <div className="minutes" ref={minutesRef}></div>
            <div className="seconds" ref={secondsRef}></div>
        </div>
    );
};

export default AnalogClock;
