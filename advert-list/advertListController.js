import { advertisements } from "./advertisements.js";
// import { getAdverts } from "./advertisements.js";

import { buildAdvertView } from "./advertView.js";


export function advertListController(advertListElement) { //async antes de function
    advertListElement.innerHTML = ''

    // const advertisements = await getAdverts()
    for (const advert of advertisements) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement)
    }
}

//TODO: implementa los commentarios una vez hayas cargado sparrest