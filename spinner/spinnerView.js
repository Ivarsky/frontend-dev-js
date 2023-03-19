export function buildSpinnerView() {
    const spinner = `
    <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
    </div>
    `

    return spinner
}

export function hideSpinner(spinnerElement) {
    //const spinnerElement = advertListElement.querySelector('.spinner');
    spinnerElement.hidden = true
}