import gc from './libs/goss_concat';
import compose from './libs/goss_compose';

const s = 'abc'; // паттерн экстракции метода в функцию
const up = x => String.prototype.toUpperCase.call(x);
const ps = x => String.prototype.padStart.call(x, 10, '*');
const rp = x => String.prototype.repeat.call(x, 2);
const sp = x => String.prototype.split.call(x, '');
const rv = x => Array.prototype.reverse.call(x);

console.log('example:');
console.log(s.toUpperCase().padStart(10, '*').repeat(2).split('').reverse().join(''));

console.log('\nfirst:');
console.log(gc(...rv(sp(rp(ps(up(s)))))));

console.log('\nsecond:');
console.log(gc(...compose(rv, sp, rp, ps, up)(s)));