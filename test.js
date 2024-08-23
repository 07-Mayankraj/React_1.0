var findComplement = function (num) {
    let binary = num.toString(2);
    console.log({binary});
let res = '';

for (let char of binary) {
  res += char === '1' ? '0' : '1';
}

return parseInt(res, 2);
}

console.log(findComplement(5)); 