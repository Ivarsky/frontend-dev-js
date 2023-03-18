import { buildAdvertDetailView } from "./adDetailView.js"
import { getAdDetailbyId } from "./advertDetail.js"

export const adDetailController = async (adDetailElement, adId) => {

    try {
        const advert = await getAdDetailbyId(adId)
        adDetailElement.innerHTML = buildAdvertDetailView(advert)
    } catch (error) {
        alert(error.message)//TODO: A METODO PUBSUB (1:14 ULTIMA CLASE)
    }
}