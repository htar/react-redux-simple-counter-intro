import Base from './base';

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';


export const increaseCounter = () => ({counter:1, type:INCREASE_COUNTER});

export const resetCounter = () => ({counter:0, type:RESET_COUNTER});

export const loadTournaments = (param1, param2) => ({
  type: 'PROMISE',
  actions: ['TOURNAMENTS_LOADING_STARTED', 'TOURNAMENTS_LOADING_FINISHED', 'TOURNAMENTS_LOADING_FAILED'],
  promise: Base.load(param1, param2)
});

