import { pubSub } from "../pubSub.js";
import { getAdverts } from "./advertisements.js";
import { buildAdvertView, buildSpinnerView, buildErrorLoadingAdverts, buildEmptyAdvertslist } from "./advertView.js";

export async function advertListController(advertListElement) {

    advertListElement.innerHTML = buildSpinnerView();
    let advertisements = [];

    try {
        advertisements = await getAdverts()
        //dispatchCustomEvent('Adverts loaded', advertListElement)
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Adverts loaded')

        if (advertisements.length > 0) {
            showAdds(advertisements, advertListElement)
        } else {
            showEmptyMessage(advertListElement)
        }

    } catch (error) {
        // advertListElement.innerHTML = buildErrorLoadingAdverts();
        //dispatchCustomEvent('Cannot load adverts', advertListElement)
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

/*
function dispatchCustomEvent(message, advertListElement) {
    const event = new CustomEvent('newNotification', {
        detail: {
            message: message
        }
    })
    advertListElement.dispatchEvent(event);
}
*/