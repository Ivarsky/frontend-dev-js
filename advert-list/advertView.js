export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.classList.add('advert')
    
    let sellOrBuy = ''
    if (advert.sell === 'true') {
        sellOrBuy = 'Selling'
    } else {
        sellOrBuy = 'Buying'
    }

    newAdvertElement.innerHTML = `
    <a href="/advert-details.html?adId=${advert.id}">
    <div class="add-info"">
    <h3>${sellOrBuy}</h3>
        <span> ${advert.name} - ${advert.price} Euros </span>
        <br>
        <img src="${advert.image}" />
    </div>
    </a>
        <p> ${advert.description} </p>
        `;
    return newAdvertElement;
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

export function buildEmptyAdvertslist() {
    return `<p> There are not ads uploaded yet, we will be up and running soon! </p>`
}