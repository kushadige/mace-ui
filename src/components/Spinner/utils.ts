export type speed = 'slow' | 'normal' | 'fast' | 'faster';

const speeds = {
    slow: '5s',
    normal: '3s',
    fast: '2s',
    faster: '1s',
};

export const speedMap = (speed: speed): string => {
    return speeds[speed];
};
