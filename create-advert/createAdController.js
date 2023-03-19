import { createAd } from "./createAd.js";
import { pubSub } from "../utils/pubSub.js";
import { buildSpinnerView } from "./createAdView.js";

export const createAdController = (createAdFormElement) => {
    createAdFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(createAdFormElement);
        
        const name = formData.get('name');
        const image = formData.get('photo-url');
        const price = formData.get('price');
        const description = formData.get('description');
        const sell = formData.get('sell');
        
        const newAdData = [name, image, price, description, sell]
        
        try {
            await createAd(newAdData);
            createAdFormElement.innerHTML = buildSpinnerView();
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `Creating new ad`);
            setTimeout(() => {
                window.location = '/'
            }, 3000)
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `${error.message}, reloading`)
            setTimeout(() => {
                window.location = '/'
            }, 3000)
        }
    })
}