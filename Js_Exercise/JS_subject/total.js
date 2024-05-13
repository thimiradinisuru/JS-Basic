let sinhala = (document.getElementById("Sinhala").value);
let English = (document.getElementById("English").value);
let maths = (document.getElementById("maths").value);
let average = (document.getElementById("average").value);
let pass ;


sinhala = parseInt(sinhala);
English = parseInt(English); 
maths = parseInt(maths);
average = parseInt(average);


console.log(sinhala);
console.log(English);
console.log(maths);
console.log(average);

let total;
total = sinhala + English + maths ;

console.log(total);

average = total / average;
console.log("Average = ",average);

pass = 50 < average;
console.log(pass);

sinhala = 40 == average;
console.log(sinhala);

English = 50 >= average;
console.log(English);

maths = 60 != average;
console.log(maths);

if (pass) {
    console.log("Good");
}

else {
    console.log("Bad")
}

if (maths) {
    console.log("Good Maths");
}

else {
    console.log("Bad Maths")
}

if (English) {
    console.log("Good English");
}

else {
    console.log("Bad English")
}

if (sinhala) {
    console.log("Good sinhala");
}

else {
    console.log("Bad sinhala")
}




