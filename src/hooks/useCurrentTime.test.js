import { renderHook } from '@testing-library/react';
import useCurrentTime from './useCurrentTime';

describe('useCurrentTime hook', () => {
    it('returns current hours, minutes and seconds', () => {
        const { result } = renderHook(() => useCurrentTime());
        const now = new Date();
        expect(result.current.hours).toBe(now.getHours());
        expect(result.current.minutes).toBe(now.getMinutes());
        expect(result.current.seconds).toBe(now.getSeconds());
    });
});
