import './App.css';
import useCurrentTime from './hooks/useCurrentTime';
import AnalogClockLayer from './components/AnalogClockLayer';
import DigitalClockLayer from './components/DigitalClockLayer';
import { TimeContext } from './contexts/TimeContext';

const App = () => {
    const time = useCurrentTime();

    return (
        <TimeContext.Provider value={time}>
            <div className="App">
                <AnalogClockLayer />
                <DigitalClockLayer />
            </div>
        </TimeContext.Provider>
    );
};

export default App;
