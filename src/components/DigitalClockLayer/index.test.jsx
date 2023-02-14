import { render } from '@testing-library/react';
import DigitalClockLayer from '.';

describe('<DigitalClockLayer />', () => {
    it('matches the snapshot', () => {
        const { container } = render(<DigitalClockLayer />);
        expect(container).toMatchSnapshot();
    });
});
