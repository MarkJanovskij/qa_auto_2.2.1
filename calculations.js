function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x,y) {
x = x - y;
return x;
}

function divideBalanceByAccounts(x, y) {
  x = x / y;
  return x;
  
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
// Second function "y" was missing to run a code
//divideBalanceByAccounts remove  console.log("x");  and in console.log(divideBalanceByAccounts(3000, 2,4000)); remove 4000 
function increaseBalance(x, y) {
  x += y;
  return x;
}
//console.log(increaseBalance(3000, 700));

function decreaseBalance(x,y) {
  x -=y;
  return x;
  }
 // console.log(decreaseBalance(10, 5));


function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}
//console.log(divideBalanceByAccounts(10, 5));

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}
//console.log(getRestAfterDivision(10, 5));
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
//HW 2.2.2 use assignment operators