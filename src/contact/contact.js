import './contact.css';

export default function contact(){
    const contactContainerDiv = document.createElement('div');
    contactContainerDiv.classList.toggle('contactContainerDiv');
    

    const pageTitle = document.createElement('h1');
    contactContainerDiv.appendChild(pageTitle);
    pageTitle.classList.toggle('pageTitle');
    
    pageTitle.textContent = 'CONTACT US'

    //first contact detail
    const contactOneDiv = document.createElement('div');
    contactContainerDiv.appendChild(contactOneDiv);
    contactOneDiv.classList.toggle('contactOneDiv');

    const contactOneName = document.createElement('h2');
    contactOneDiv.appendChild(contactOneName);
    contactOneName.textContent = 'John Doe';

    const contactOnePhone = document.createElement('p');
    contactOneDiv.appendChild(contactOnePhone);
    contactOnePhone.innerHTML = "<b>Phone ☎:</b> +1(111)-111-1110";


    const contactOneEmail = document.createElement('p');
    contactOneDiv.appendChild(contactOneEmail);
    contactOneEmail.innerHTML = "<b>e-mail 📨 :</b> info@domainexists.com";
    //first contact end




    return contactContainerDiv;
}