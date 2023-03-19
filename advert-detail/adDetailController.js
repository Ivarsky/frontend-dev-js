import { buildAdvertDetailView, buildSpinnerView, hideSpinner } from "./adDetailView.js"
import { deleteAd, getAdDetailbyId } from "./advertDetail.js"
import { decodeToken } from "../utils/decodeToken.js"
import { pubSub } from "../utils/pubSub.js"

export const adDetailController = async (adDetailElement, adId) => {
    adDetailElement.innerHTML = buildSpinnerView();
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
    } finally {
        hideSpinner(adDetailElement)
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
                        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `Deleting ad`);
                        adDetailElement.innerHTML = buildSpinnerView();
                        await deleteAd(advert.id)
                        setTimeout(() => {
                            window.location = '/'
                        }, 3000)
                    }
                })
            } else {
                handleDeleteAdButtonElement.remove()
            }
        }
    }
}

