import { render } from '@testing-library/react';
import DigitalClock from '.';

describe('<DigitalClock />', () => {
    it('matches the snapshot', () => {
        const { container } = render(
            <DigitalClock hours={1} minutes={0} seconds={59} />,
        );
        expect(container).toMatchSnapshot();
    });
});
