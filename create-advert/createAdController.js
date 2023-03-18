import { createAd } from "./createAd.js";

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
            window.location = '/'
        } catch (error) {
            alert('error') //TODO: con notification controller
        }
    })
}