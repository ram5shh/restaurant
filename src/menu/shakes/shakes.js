import './shakes.css';

export default function shakes() {
    const shakesContainer = document.createElement('div');
    shakesContainer.classList.toggle('shakesContainer');

    //first item
    const firstItemDiv = document.createElement('div');//div
    firstItemDiv.classList.toggle('firstItemDiv');
    shakesContainer.appendChild(firstItemDiv);

    const shakeItem1Title = document.createElement('h3'); //title
    firstItemDiv.appendChild(shakeItem1Title);
    shakeItem1Title.classList.toggle('shakeItem1Title');
    shakeItem1Title.textContent = "Shake 1";

    const shakeItem1Desc = document.createElement('p'); //desc
    firstItemDiv.appendChild(shakeItem1Desc);
    shakeItem1Desc.classList.toggle('shakeItem1Desc');
    shakeItem1Desc.textContent = "Shake 1 desc";

    //second item
    const secondItemDiv = document.createElement('div');//div
    secondItemDiv.classList.toggle('secondItemDiv');
    shakesContainer.appendChild(secondItemDiv);

    const shakeItem2Title = document.createElement('h3'); //title
    secondItemDiv.appendChild(shakeItem2Title);
    shakeItem2Title.classList.toggle('shakeItem2Title');
    shakeItem2Title.textContent = "Shake 2";

    const shakeItem2Desc = document.createElement('p'); //desc
    secondItemDiv.appendChild(shakeItem2Desc);
    shakeItem2Desc.classList.toggle('shakeItem2Desc');
    shakeItem2Desc.textContent = "Shake 2 desc";

    //third item
    const thirdItemDiv = document.createElement('div');//div
    thirdItemDiv.classList.toggle('thirdItemDiv');
    shakesContainer.appendChild(thirdItemDiv);

    const shakeItem3Title = document.createElement('h3'); //title
    thirdItemDiv.appendChild(shakeItem3Title);
    shakeItem3Title.classList.toggle('shakeItem3Title');
    shakeItem3Title.textContent = "Shake 3";

    const shakeItem3Desc = document.createElement('p'); //desc
    thirdItemDiv.appendChild(shakeItem3Desc);
    shakeItem3Desc.classList.toggle('shakeItem3Desc');
    shakeItem3Desc.textContent = "Shake 3 desc";

    return shakesContainer;
}