function calculateInterest() {
    let name = document.getElementById("name").value;
    let loanAmount = parseInt(document.getElementById("loan-amount").value);
    let years = parseInt(document.getElementById("years").value);
    let select = document.getElementById("select").value;
    let interestRate;
    let interest = 0;
    let totalAmount = 0;

    if (loanAmount < 10000) {
        interestRate = 10;
    } else if (loanAmount < 100000) {
        interestRate = 12;
    } else if (loanAmount < 1000000) {
        interestRate = 15;
    } else {
        interestRate = 18;
    }

    if (select == "pettyinterest") {
        interest = years * (loanAmount * interestRate) / 100;
        totalAmount = loanAmount + interest;
    } else {
        let count = 0;
        while (count < years  ) {
            totalAmount +=  totalAmount     * (interestRate / 100);
            count++;
        }
    }

    alert("Dear " + name + ", you want to pay Rs:" + loanAmount + " annually with Rs: " + interest + " interest. \n At the end of " + years + " years, you will have to pay a total of Rs:" + totalAmount);
}
