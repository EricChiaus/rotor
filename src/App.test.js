import { render } from '@testing-library/react';
import App from './App';
import useCurrentTime from './hooks/useCurrentTime';

jest.mock('./hooks/useCurrentTime', () => jest.fn());

describe('<App />', () => {
    beforeEach(() => {
        useCurrentTime.mockReset().mockReturnValue({
            hours: 0,
            minutes: 1,
            seconds: 59,
        });
    });
    it('matches the snapshot', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
});
