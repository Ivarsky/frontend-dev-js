import { buildAdvertDetailView } from "./adDetailView.js"
import { deleteAd, getAdDetailbyId } from "./advertDetail.js"
import { decodeToken } from "../utils/decodeToken.js"
import { pubSub } from "../utils/pubSub.js"
import { showSpinnerPubSub, hideSpinnerPubSub } from "../utils/spinnerPubSub.js"

export const adDetailController = async (adDetailElement, adId) => {
    showSpinnerPubSub.publish(showSpinnerPubSub.TOPICS.SHOW_SPINNER)
    try {
        const advert = await getAdDetailbyId(adId)
        adDetailElement.innerHTML = buildAdvertDetailView(advert)
        handleDeleteAdButton(adDetailElement, advert)
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Advert detail loaded')
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `${error.message}, reloading to main page`)
        setTimeout(() => {
            window.location = '/'
        }, 5000)
    } finally{
        hideSpinnerPubSub.publish(hideSpinnerPubSub.TOPICS.HIDE_SPINNER)
    }

    function handleDeleteAdButton(adDetailElement, advert){
        const token = localStorage.getItem('token');
        const handleDeleteAdButtonElement = adDetailElement.querySelector('#deleteAd');

        if (!token) {
            handleDeleteAdButtonElement.remove()
        }else{
            const userInfo = decodeToken(token);
            if (advert.userId === userInfo.userId) {
                handleDeleteAdButtonElement.addEventListener('click', async () => {
                    const answer = confirm("The ad will be deleted PERMANENTLY, are you sure?")
                    if (answer) {
                        await deleteAd(advert.id)
                        window.location = '/'
                    }
                })
            } else {
                handleDeleteAdButtonElement.remove()
            }
        }
    }
}