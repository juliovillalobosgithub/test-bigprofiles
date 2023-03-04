export const getColor = (value: string): string => {
    switch (value) {
        case 'primary':
            return '#4c81eb';

        case 'danger':
            return '#F48FB1';
        case 'success':
            return '#b2d788';
        default:
            return '#4c81eb';
    }
};