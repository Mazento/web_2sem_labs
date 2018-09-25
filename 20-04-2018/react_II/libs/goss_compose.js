// Взято отсюда: https://kodaktor.ru/j/goss_compose

module.exports = (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
