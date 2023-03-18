import { buildAdvertDetailView } from "./adDetailView.js"
import { deleteAd, getAdDetailbyId } from "./advertDetail.js"
import { decodeToken } from "../utils/decodeToken.js"

export const adDetailController = async (adDetailElement, adId) => {

    try {
        const advert = await getAdDetailbyId(adId)
        adDetailElement.innerHTML = buildAdvertDetailView(advert)
        handleDeleteAdButton(adDetailElement, advert)
    } catch (error) {
        alert(error.message)//TODO: A METODO PUBSUB (1:14 ULTIMA CLASE)
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