export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.innerHTML = `
        <p> ${advert.name} - ${advert.price} Euros </p>
        <p> ${advert.image} </p>
        <p> ${advert.description} </p>
        `;
    return newAdvertElement;
}