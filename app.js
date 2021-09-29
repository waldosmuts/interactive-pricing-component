const billingSwitch = document.querySelector("#billing");
const pageviewsSlider = document.querySelector("#views");

const pageviews = document.querySelector("#pageviews");
const price = document.querySelector("#price");

pageviewsSlider.addEventListener("input", () => {
    updateStats();
})

billingSwitch.addEventListener("click", () => {
    updateStats();
})

function updateStats() {
    switch (pageviewsSlider.value) {
        case "1":
            pageviews.innerText = "10K";
            price.innerText = calcPrice(8.00);
            break;
        case "2":
            pageviews.innerText = "50K";
            price.innerText = calcPrice(12.00);
            break;
        case "3":
            pageviews.innerText = "100K";
            price.innerText = calcPrice(16.00);
            break;
        case "4":
            pageviews.innerText = "500K";
            price.innerText = calcPrice(24.00);
            break;
        case "5":
            pageviews.innerText = "1M";
            price.innerText = calcPrice(36.00);
            break;
        default:
            break;
    }
}

function calcPrice(amount) {
    if (billingSwitch.checked) {
        return (amount * 0.75).toFixed(2);
    } else {
        return (amount).toFixed(2);
    }
}