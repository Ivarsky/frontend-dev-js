export const  buildAdvertDetailView = (advert) => {
    let sellOrBuy = ''
    if (advert.sell === 'true') {
        sellOrBuy = 'Selling'
    } else {
        sellOrBuy = 'Buying'
    }

    return`
    <article class="advert">
        <div class="add-info"">
            <h2>${sellOrBuy}</h2>
            <br>
            <span> ${advert.name} - ${advert.price} Euros </span>
            <br>
            </div>
            <img src="${advert.image}" />
        <section> 
        <h3>Description:</h3>
        <p> ${advert.description} </p>
    </section>
    </article>
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