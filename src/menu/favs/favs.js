import './favs.css';
export default function favorites() {

    const favsContainer = document.createElement('div');
    favsContainer.classList.toggle('favsContainer');

    //first item
    const firstItemDiv = document.createElement('div');//div
    firstItemDiv.classList.toggle('firstItemDiv');
    favsContainer.appendChild(firstItemDiv);


    

    const favItem1Title = document.createElement('h3'); //title
    firstItemDiv.appendChild(favItem1Title);
    favItem1Title.classList.toggle('favItem1Title');
    favItem1Title.textContent = "Ice Cream Sundae";

    const favItem1Desc = document.createElement('p'); //desc
    firstItemDiv.appendChild(favItem1Desc);
    favItem1Desc.classList.toggle('favItem1Desc');
    favItem1Desc.textContent = "Ice Cream Sundae desc";

    //second item
    const secondItemDiv = document.createElement('div'); //div
    secondItemDiv.classList.toggle('secondItemDiv');
    favsContainer.appendChild(secondItemDiv);

    const favItem2Title = document.createElement('h3'); //title
    secondItemDiv.appendChild(favItem2Title);
    favItem2Title.classList.toggle('favItem2Title');
    favItem2Title.textContent = "Vanilla";

    const favItem2Desc = document.createElement('p'); //desc
    secondItemDiv.appendChild(favItem2Desc);
    favItem2Desc.classList.toggle('favItem2Desc');
    favItem2Desc.textContent = "Vanilla 2";


    //third item
    const thirdItemDiv = document.createElement('div'); //div
    thirdItemDiv.classList.toggle('thirdItemDiv');
    favsContainer.appendChild(thirdItemDiv);

    const favItem3Title = document.createElement('h3'); //title
    thirdItemDiv.appendChild(favItem3Title);
    favItem3Title.classList.toggle('favItem3Title');
    favItem3Title.textContent = "Strawberry";

    const favItem3Desc = document.createElement('p'); //desc
    thirdItemDiv.appendChild(favItem3Desc);
    favItem3Desc.classList.toggle('favItem3Desc');
    favItem3Desc.textContent = "Strawberry 2";

    return favsContainer;
}