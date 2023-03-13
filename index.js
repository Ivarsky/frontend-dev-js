// obtain advertisements array
import { advertisements } from "./advertisements.js";

const advertListElement = document.querySelector('.advert-list')

// generation of HTML that will represent one advertisement

for (const advert of advertisements) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.innerHTML = `
    <p> ${advert.name} - ${advert.price} Euros </p>
    <p> ${advert.image} </p>
    <p> ${advert.description} </p>
    `;
    // add to DOM
    advertListElement.appendChild(newAdvertElement)
}

