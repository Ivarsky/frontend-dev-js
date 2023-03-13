import { advertisements } from "./advertisements.js";
import { buildAdvertView } from "./advertView.js";


export function advertListController(advertListElement) {

    for (const advert of advertisements) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement)
    }

}