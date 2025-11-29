let loanAmount = document.querySelector("#loan-amount");
let interest = document.querySelector("#interest");
let loanTenure = document.querySelector("#loan-tenure");
let calculate = document.querySelector("#btn");
let reset = document.querySelector("#btn2");
let result = document.querySelector("#emi");

calculate.addEventListener("click", () =>{
    let am = Number(loanAmount.value);
    let int = Number(interest.value);
    let duration = Number(loanTenure.value);
    let i = (am*int)/100;
    let dui = duration*i;
    let Totalamount = dui+am;
    let months = duration*12;
    let emi = Totalamount/months;
    result.innerText = emi;
})

reset.addEventListener("click", () =>{
    loanAmount.value = "";
    interest.value = "";
    loanTenure.value = "";
    result.innerText = "";
})