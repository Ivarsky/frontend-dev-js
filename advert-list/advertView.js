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