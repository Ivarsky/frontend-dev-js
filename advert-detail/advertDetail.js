export const getAdDetailbyId = async (adId) => {
    const response =  await fetch(`http://localhost:8000/api/advertisements/${adId}`);
    

    if (!response.ok) {
        throw new Error("The requested advert doesn't exist ")
    }
    const advert = await response.json();

    return advert
}