import './menu.css';
import favs from './favs/favs.js';
import signature from './signature/signature.js';
import cakes from './cakes/cakes.js';
import shakes from './shakes/shakes.js';



export default function menu() {
    const menuPageHeaderDiv = document.createElement('div'); //main div
    menuPageHeaderDiv.classList.toggle('menuPageHeaderDiv');


    //options list
    const optionList = document.createElement('div');
    optionList.classList.toggle('optionList');
    menuPageHeaderDiv.append(optionList);

    //favs link   
    const favsLink = document.createElement('button');
    favsLink.classList.toggle('favsLink');
    optionList.append(favsLink);
    favsLink.textContent = 'Fan Favorites';

    //signature link
    const signatureLink = document.createElement('button');
    optionList.append(signatureLink);
    signatureLink.classList.toggle('signatureLink');
    signatureLink.textContent = 'Signature Items';

    //cakes link
    const cakesLink = document.createElement('button');
    optionList.append(cakesLink);
    cakesLink.classList.toggle('cakesLink');
    cakesLink.textContent = 'Cakes';

    //shakes link
    const shakesLink = document.createElement('button');
    optionList.append(shakesLink);
    shakesLink.classList.toggle('shakesLink');
    shakesLink.textContent = 'Shakes';



    //this is what will be replaced with each click
    const menuContainer = document.createElement('div');
    menuContainer.classList.toggle('menuContainer');
    menuPageHeaderDiv.appendChild(menuContainer);
    menuContainer.replaceChildren(favs()); //default init

    //favs link clicked
    favsLink.addEventListener('click', (event) => {
        menuContainer.replaceChildren(favs());
    });


    //signature link clicked
    signatureLink.addEventListener('click', (event) => {
        menuContainer.replaceChildren(signature());
    });

    //Cakes link clicked
    cakesLink.addEventListener('click', (event) => {
        menuContainer.replaceChildren(cakes());
    });


    //Shakes link clicked
    shakesLink.addEventListener('click', (event) => {
        menuContainer.replaceChildren(shakes());
    });

    return menuPageHeaderDiv;
}