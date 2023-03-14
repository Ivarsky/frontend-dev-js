/*
export const advertisements = [{
    image: 'image1',
    name: 'bycicle',
    description: 'barely used bike',
    price: 100,
    sell: true,
}, {
    image: 'image2',
    name: 'portal gun',
    description: 'Looking for an interdimensional portal gun',
    price: 100000,
    sell: false,
}, {
    image: 'image2',
    name: 'spaceship',
    description: 'only used in solar system',
    price: 500000,
    sell: true,
}, {
    image: 'image3',
    name: 'Mr.Meeseeks box',
    description: 'Looking for a Mr.Meeseeks box',
    price: 25000,
    sell: false,
}]
*/

export async function getAdverts() {
    const advertsUrl = 'http://localhost:8000/api/advertisements'; // sparrest url

    const response = await fetch(advertsUrl);
    const adverts = await response.json();

    return adverts
}