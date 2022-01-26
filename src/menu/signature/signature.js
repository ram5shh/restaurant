import './signature.css';

export default function signature(){
    
    const signatureContainer = document.createElement('div');
    signatureContainer.classList.toggle('signatureContainer');


    //first item
    const firstItemDiv = document.createElement('div');//div
    firstItemDiv.classList.toggle('firstItemDiv');
    signatureContainer.appendChild(firstItemDiv);

    const signatureItem1Title = document.createElement('h3'); //title
    firstItemDiv.appendChild(signatureItem1Title);
    signatureItem1Title.classList.toggle('signatureItem1Title');
    signatureItem1Title.textContent = "Signature stuff 1";

    const signatureItem1Desc = document.createElement('p'); //desc
    firstItemDiv.appendChild(signatureItem1Desc);
    signatureItem1Desc.classList.toggle('signatureItem1Desc');
    signatureItem1Desc.textContent = "Signature stuff 1 desc";

    //second item
    const secondItemDiv = document.createElement('div'); //div
    secondItemDiv.classList.toggle('secondItemDiv');
    signatureContainer.appendChild(secondItemDiv);

    const signatureItem2Title = document.createElement('h3'); //title
    secondItemDiv.appendChild(signatureItem2Title);
    signatureItem2Title.classList.toggle('signatureItem2Title');
    signatureItem2Title.textContent = "Signature stuff 2";

    const signatureItem2Desc = document.createElement('p'); //desc
    secondItemDiv.appendChild(signatureItem2Desc);
    signatureItem2Desc.classList.toggle('signatureItem2Desc');
    signatureItem2Desc.textContent = "Signature stuff 2 desc";



    return signatureContainer;
}