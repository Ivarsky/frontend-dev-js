export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.classList.add('advert')
    newAdvertElement.innerHTML = `
        <p> ${advert.name} - ${advert.price} Euros </p>
        <p> ${advert.image} </p>
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

export function buildErrorLoadingAdverts() {
    return `<p class="load-error"> Error while loading ads, try later </p>`
}

export function buildEmptyAdvertslist() {
    return `<p> There are not ads uploaded yet, we will be up and running soon! </p>`
}