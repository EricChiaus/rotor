import { render } from '@testing-library/react';
import AnalogClock from '.';

describe('<AnalogClock />', () => {
    it('matches the snapshot', () => {
        const { container } = render(
            <AnalogClock hours={1} minutes={0} seconds={59} />,
        );
        expect(container).toMatchSnapshot();
    });
});
