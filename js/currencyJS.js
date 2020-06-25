let form = document.querySelector(".js-form");
let currencyAmount = document.querySelector(".js-amount");
let firstCurrencySelect = document.querySelector(".js-currencyOption1");
let secondCurrencySelect = document.querySelector(".js-currencyOption2");
let finalOutput = document.querySelector(".js-result")

let eurRate = 4.44828;
let usdRate = 3.94747;
let plnRate = 1;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = Number(currencyAmount.value);
    let currency1 = firstCurrencySelect.value;
    let currency2 = secondCurrencySelect.value;
    let result1;
    let result2;

    switch (currency1) {
        case "PLN":
            result1 = amount * plnRate;
            break
        case "EUR":
            result1 = amount * eurRate;
            break;
        case "USD":
            result1 = amount * usdRate;
            break;
    };
    switch (currency2) {
        case "PLN":
            result2 = result1 / plnRate;
            break;
        case "EUR":
            result2 = result1 / eurRate;
            break;
        case "USD":
            result2 = result1 / usdRate;
    };
    finalOutput.innerText = `${amount.toFixed(2)} ${currency1} = ${result2.toFixed(2)} ${currency2}`;
});