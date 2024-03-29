import { pubSub } from "../utils/pubSub.js";
import { getAdverts } from "./advertisements.js";
import { buildAdvertView, buildSpinnerView, buildEmptyAdvertslist } from "./advertView.js";

export async function advertListController(advertListElement) {

    advertListElement.innerHTML = buildSpinnerView();
    let advertisements = [];

    try {
        advertisements = await getAdverts()
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Adverts loaded')

        if (advertisements.length > 0) {
            showAdds(advertisements, advertListElement)
        } else {
            showEmptyMessage(advertListElement)
        }

    } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Cannot load adverts')
    } finally {
        hideSpinner(advertListElement)
    }
}

function hideSpinner(advertListElement) {
    const spinnerElement = advertListElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}

function showAdds(advertisements, advertListElement) {
    for (const advert of advertisements) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement)
    }
}

function showEmptyMessage(advertListElement) {
    advertListElement.innerHTML = buildEmptyAdvertslist();
}
