let total;//Global variable
let discountRate;
let discountBill;
function colculateTotal() {
let pasta = parseInt(document.getElementById("pasta").value);
let pizza = parseInt(document.getElementById("pizza").value);
let burgur = parseInt(document.getElementById("burgur").value);
let select = (document.getElementById("select").value)

if (select=="vagi"){     
    total=pasta*50 + pizza*150 + burgur*100;
    console.log("Total Price =",total);
}
else {
    total=pasta*100 + pizza*200 + burgur*150;
    console.log("Total Price =",total);
}
}

function colculateDiscount() {
    if (total > 3000) {
        discountRate=10;}
    else if (total > 2000) {
        discountRate=5;}
    else if (total > 1000){
        discountRate=2;}
    else {
        discountRate=0;}
discountRate = (discountRate*total)/100;
console.log("Discount = Rs:",discountRate);
}

function colculateBill() {
    discountBill = (total-discountRate);
    console.log("Bill = Rs:",discountBill); 
    alert("Total = Rs:" + discountBill)
}  

function colculateLastTotal() {
    colculateTotal() 
    colculateDiscount()
    colculateBill()
}