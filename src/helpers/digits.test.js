import { digitToName, numberToDigits } from './digits';

describe('numberToDigits method', () => {
    it('given 1 returns 0 and 1', () => {
        expect(numberToDigits(1)).toEqual({
            high: 0,
            low: 1,
        });
    });

    it('given 12 returns 1 and 2', () => {
        expect(numberToDigits(12)).toEqual({
            high: 1,
            low: 2,
        });
    });
});

describe('digitToName method', () => {
    it('given -1 returns null', () => {
        expect(digitToName(-1)).toBeNull();
    });

    it('given 10 returns null', () => {
        expect(digitToName(10)).toBeNull();
    });

    describe.each`
        digit | name
        ${0}  | ${'zero'}
        ${1}  | ${'one'}
        ${2}  | ${'two'}
        ${3}  | ${'three'}
        ${4}  | ${'four'}
        ${5}  | ${'five'}
        ${6}  | ${'six'}
        ${7}  | ${'seven'}
        ${8}  | ${'eight'}
        ${9}  | ${'nine'}
    `('given $digit', ({ digit, name }) => {
        it(`returns ${name}`, () => {
            expect(digitToName(digit)).toBe(name);
        });
    });
});
