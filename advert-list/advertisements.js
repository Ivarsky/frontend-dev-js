
export async function getAdverts() {
    const advertsUrl = 'http://localhost:8000/api/advertisements'; // sparrest url

    const response = await fetch(advertsUrl);
    const adverts = await response.json();

    return adverts
}