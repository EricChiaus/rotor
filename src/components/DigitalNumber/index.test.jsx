import { render } from '@testing-library/react';
import DigitalNumber from '.';

describe('<DigitalNumber />', () => {
    it('matches the snapshot', () => {
        const { container } = render(<DigitalNumber number="one" />);
        expect(container).toMatchSnapshot();
    });

    it('given no parameter matches the snapshot', () => {
        const { container } = render(<DigitalNumber />);
        expect(container).toMatchSnapshot();
    });
});
