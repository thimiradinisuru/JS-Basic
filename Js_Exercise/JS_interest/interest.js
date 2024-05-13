let loneAmount = (document.getElementById("lone-amount").value);
let interestRate = (document.getElementById("interest-rate").value);
let years = (document.getElementById("years").value);
let average = (document.getElementById())

loneAmount = parseInt(loneAmount);
interestRate = parseInt(interestRate);
years = parseInt(years);

console.log(loneAmount);
console.log(interestRate);
console.log(years);

let totel;
totel = (loneAmount/100)*(interestRate*years);
totel = totel+loneAmount;


console.log(totel);
