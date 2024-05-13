let total
function colculateTotal() {
let pasta = parseInt(document.getElementById("pasta").value);
let pizza = parseInt(document.getElementById("pizza").value);
let burgur = parseInt(document.getElementById("burgur").value);
let select=(document.getElementById("select").value);

if (select=="vagi"){     
    total=pasta*50 + pizza*150 + burgur*100;
    console.log("Total Price =",total);
    alert("Total = Rs : " + total);
}
else {
    total=pasta*100 + pizza*200 + burgur*150;
    console.log("Total Price =",total);
    alert("Total = Rs : " + total);
}
}