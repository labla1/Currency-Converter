{
    const calculation = (amount, currency1, currency2) => {
        let result1;
        const eurRate = 4.44828;
        const usdRate = 3.94747;
        const plnRate = 1;

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
                return result1 / plnRate;

            case "EUR":
                return result1 / eurRate;

            case "USD":
                return result1 / usdRate;
        };
    }

    const form = document.querySelector(".js-form");

    const resultText = (amount, currency1, currency2) => {
        const result2 = calculation(amount, currency1, currency2);
        const finalOutput = document.querySelector(".js-result")
        finalOutput.innerText = `${amount.toFixed(2)} ${currency1} = ${result2.toFixed(2)} ${currency2}`;
    }

    const onFormSumbit = (event) => {
        event.preventDefault();

        const currencyAmount = document.querySelector(".js-amount");
        const firstCurrencySelect = document.querySelector(".js-currencyOption1");
        const secondCurrencySelect = document.querySelector(".js-currencyOption2");

        const amount = +currencyAmount.value;
        const currency1 = firstCurrencySelect.value;
        const currency2 = secondCurrencySelect.value;

        resultText(amount, currency1, currency2);
    }

    const init = () => {
        form.addEventListener("submit", onFormSumbit);
    }
    init();
}