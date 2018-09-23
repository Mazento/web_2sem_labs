// Bind
function funcBind (a) {
    return this ** a;
}
let res = funcBind.bind(Math.PI);

console.log(res(3));

// Curry
const funcCurry = x => y => x**y;

console.log(funcCurry(2)(5));