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
            generateRangeProgress(1);
            price.innerText = calcPrice(8.00);
            break;
        case "2":
            pageviews.innerText = "50K";
            generateRangeProgress(2);
            price.innerText = calcPrice(12.00);
            break;
        case "3":
            pageviews.innerText = "100K";
            generateRangeProgress(3);
            price.innerText = calcPrice(16.00);
            break;
        case "4":
            pageviews.innerText = "500K";
            generateRangeProgress(4);
            price.innerText = calcPrice(24.00);
            break;
        case "5":
            pageviews.innerText = "1M";
            generateRangeProgress(5);
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

function generateRangeProgress(value) {
    switch (value) {
        case 1:
            pageviewsSlider.classList.add("views-0");
            pageviewsSlider.classList.remove("views-25");
            pageviewsSlider.classList.remove("views-50");
            pageviewsSlider.classList.remove("views-75");
            pageviewsSlider.classList.remove("views-100");
            break;
        case 2:
            pageviewsSlider.classList.remove("views-0");
            pageviewsSlider.classList.add("views-25");
            pageviewsSlider.classList.remove("views-50");
            pageviewsSlider.classList.remove("views-75");
            pageviewsSlider.classList.remove("views-100");
            break;
        case 3:
            pageviewsSlider.classList.remove("views-0");
            pageviewsSlider.classList.remove("views-25");
            pageviewsSlider.classList.add("views-50");
            pageviewsSlider.classList.remove("views-75");
            pageviewsSlider.classList.remove("views-100");
            break;
        case 4:
            pageviewsSlider.classList.remove("views-0");
            pageviewsSlider.classList.remove("views-25");
            pageviewsSlider.classList.remove("views-50");
            pageviewsSlider.classList.add("views-75");
            pageviewsSlider.classList.remove("views-100");
            break;
        case 5:
            pageviewsSlider.classList.remove("views-0");
            pageviewsSlider.classList.remove("views-25");
            pageviewsSlider.classList.remove("views-50");
            pageviewsSlider.classList.remove("views-75");
            pageviewsSlider.classList.add("views-100");
            break;
        default:
            break;
    }
}