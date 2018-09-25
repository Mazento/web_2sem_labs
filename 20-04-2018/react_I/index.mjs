import goss_concat from './node_modules/goss_concat/index.js';

const length = 10;

console.log(goss_concat(...Array.from({length}, (value, index) => index).map(() => '*')));