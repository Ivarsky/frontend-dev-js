import { createAdController } from "./createAdController.js";

const token = localStorage.getItem('token')

if (!token) {
    window.location = '/'
} else{
    const createAdFormElement = document.querySelector('#createAdFrom');
    createAdController(createAdFormElement)
}