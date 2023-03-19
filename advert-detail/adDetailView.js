export const  buildAdvertDetailView = (advert) => {
    let sellOrBuy = ''
    if (advert.sell === 'true') {
        sellOrBuy = 'Selling'
    } else {
        sellOrBuy = 'Buying'
    }

    return`
    <div class="add-info"">
        <h2>${sellOrBuy}</h2>
        <span> ${advert.name} - ${advert.price} Euros </span>
        <br>
        <img src="${advert.image}" />
    </div>
        <p> ${advert.description} </p>

        <button id="deleteAd">Delete</button>
    `
}

export function buildSpinnerView() {
    return `
    <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
    </div>
    `
}

export function hideSpinner(adDetailElement) {
    const spinnerElement = adDetailElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}