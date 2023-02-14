import { renderHook, act } from '@testing-library/react';
import useCurrentTime from './useCurrentTime';

describe('useCurrentTime hook', () => {
    it('returns current time', () => {
        const { result } = renderHook(() => useCurrentTime());
        const now = new Date();
        expect(result.current.hours).toBe(now.getHours());
        expect(result.current.minutes).toBe(now.getMinutes());
        expect(result.current.seconds).toBe(now.getSeconds());
    });

    it('returns time for the next 1 second', () => {
        jest.useFakeTimers();
        const { result, rerender } = renderHook(() => useCurrentTime());
        const now = new Date();

        act(() => {
            jest.advanceTimersByTime(1000);
        });
        rerender();
        now.setSeconds(now.getSeconds() + 1);
        expect(result.current.hours).toBe(now.getHours());
        expect(result.current.minutes).toBe(now.getMinutes());
        expect(result.current.seconds).toBe(now.getSeconds());
    });
});
