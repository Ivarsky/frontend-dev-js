export const  buildAdvertDetailView = (advert) => {
    return`
    <div class="add-info"">
        <span> ${advert.name} - ${advert.price} Euros </span>
        <br>
        <img src="${advert.image}" />
    </div>
        <p> ${advert.description} </p>

        <button id="deleteAd">Delete</button>
    `
}