import { showSpinnerPubSub, hideSpinnerPubSub } from "../utils/spinnerPubSub.js";
import { buildSpinnerView, hideSpinner } from "./spinnerView.js";

export function spinnerController(spinnerElement){
    const spinner = buildSpinnerView();
    
    function showSpinner(spinner){
        spinnerElement.innerHTML = spinner
    }

    showSpinnerPubSub.subscribe(showSpinnerPubSub.TOPICS.SHOW_SPINNER, showSpinner(spinner))

    hideSpinnerPubSub.subscribe(hideSpinnerPubSub.TOPICS.HIDE_SPINNER, hideSpinner(spinnerElement))

    return showSpinner;
}
