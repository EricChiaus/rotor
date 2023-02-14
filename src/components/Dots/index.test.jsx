import { render } from '@testing-library/react';
import Dots from '.';

describe('<Dots />', () => {
    it('matches the snapshot', () => {
        const { container } = render(<Dots />);
        expect(container).toMatchSnapshot();
    });
});
