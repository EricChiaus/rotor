import { render } from '@testing-library/react';
import AnalogClockLayer from '.';

describe('<AnalogClockLayer />', () => {
    it('matches the snapshot', () => {
        const { container } = render(<AnalogClockLayer />);
        expect(container).toMatchSnapshot();
    });
});
