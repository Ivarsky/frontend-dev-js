import { buildSpinnerView } from "./spinnerView.js";

export function spinnerController(bodyElement){
    const spinner = buildSpinnerView();
    bodyElement.appendChild(spinner)
}