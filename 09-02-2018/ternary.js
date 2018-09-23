// #1
const age = 17;
const restricted = (age<=18) ? (age<18) ? 'yes' : 'not sure' : 'no';
console.log(restricted);

// #2
const value = process.argv[2] || NaN;
const result =
    (value === null) ? '=null' :
    (value === undefined) ? '=undefined' :
    (value !== value) ? '=NaN' :
    (value === 0) ? '=0' :
    (value === "") ? '=""' :
    (value === false) ? '=false' : value;
console.log(result);