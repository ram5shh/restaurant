import './cakes.css';

export default function cakes() {
    const cakesContainer = document.createElement('div');
    cakesContainer.classList.toggle('cakesContainer');

    //first item
    const firstItemDiv = document.createElement('div');//div
    firstItemDiv.classList.toggle('firstItemDiv');
    cakesContainer.appendChild(firstItemDiv);

    const cakeItem1Title = document.createElement('h3'); //title
    firstItemDiv.appendChild(cakeItem1Title);
    cakeItem1Title.classList.toggle('cakeItem1Title');
    cakeItem1Title.textContent = "Cake 1";

    const cakeItem1Desc = document.createElement('p'); //desc
    firstItemDiv.appendChild(cakeItem1Desc);
    cakeItem1Desc.classList.toggle('cakeItem1Desc');
    cakeItem1Desc.textContent = "Cake 1 desc";

    //second item
    const secondItemDiv = document.createElement('div');//div
    secondItemDiv.classList.toggle('secondItemDiv');
    cakesContainer.appendChild(secondItemDiv);

    const cakeItem2Title = document.createElement('h3'); //title
    secondItemDiv.appendChild(cakeItem2Title);
    cakeItem2Title.classList.toggle('cakeItem2Title');
    cakeItem2Title.textContent = "Cake 2";

    const cakeItem2Desc = document.createElement('p'); //desc
    secondItemDiv.appendChild(cakeItem2Desc);
    cakeItem2Desc.classList.toggle('cakeItem2Desc');
    cakeItem2Desc.textContent = "Cake 2 desc";

    return cakesContainer;
}