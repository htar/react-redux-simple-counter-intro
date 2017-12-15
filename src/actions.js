export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';


export const increaseCounter = () => ({counter:1, type:INCREASE_COUNTER})


export const resetCounter = () => ({counter:0, type:RESET_COUNTER})