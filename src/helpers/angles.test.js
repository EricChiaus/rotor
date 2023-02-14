import { getHoursAngle, getMinutesAngle, getSecondsAngle } from './angles';

describe('getHoursAngle method', () => {
    it('given 0 hours and 0 minutes returns 0', () => {
        expect(getHoursAngle(0, 0)).toBe(0);
    });

    it('given 1 hour and 1 minute returns 30.5', () => {
        expect(getHoursAngle(1, 1)).toBe(30.5);
    });
});

describe('getMinutesAngle method', () => {
    it('given 0 returns 0', () => {
        expect(getMinutesAngle(0)).toBe(0);
    });

    it('given 1 returns 6', () => {
        expect(getMinutesAngle(1)).toBe(6);
    });
});

describe('getSecondsAngle method', () => {
    it('given 0 returns 0', () => {
        expect(getSecondsAngle(0)).toBe(0);
    });

    it('given 50 returns 300', () => {
        expect(getSecondsAngle(50)).toBe(300);
    });
});
