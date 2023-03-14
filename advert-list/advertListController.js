import { advertisements } from "./advertisements.js";
// import { getAdverts } from "./advertisements.js";

import { buildAdvertView, buildSpinnerView } from "./advertView.js";


export function advertListController(advertListElement) { //async antes de function

    advertListElement.innerHTML = buildSpinnerView();
    // const advertisements = await getAdverts()

    hideSpinner(advertListElement);

    for (const advert of advertisements) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement)
    }
}

function hideSpinner(advertListElement) {
    const spinnerElement = advertListElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}

//TODO: implementa los commentarios una vez hayas cargado sparrest