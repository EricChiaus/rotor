import { useEffect, useState } from 'react';

const useCurrentTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

export default useCurrentTime;
