import './index.css';
import homepage from './homepage/homepage.js';
import contact from './contact/contact.js';
import menu from './menu/menu.js';


//HEADER BANNER START
const headerDiv = document.createElement('div');
headerDiv.classList.toggle('headerDiv');
document.body.append(headerDiv);

const headerTitle = document.createElement('div');
headerDiv.appendChild(headerTitle);
headerTitle.classList.toggle('headerTitle');
headerTitle.textContent = 'ICEBOYS CREAMS';

const headerLinksDiv = document.createElement('div');
headerDiv.appendChild(headerLinksDiv);
headerLinksDiv.classList.toggle('headerLinks');

const headerLinksUl = document.createElement('ul');
headerLinksUl.classList.toggle('headerLinksUl');
headerLinksDiv.appendChild(headerLinksUl);

//home
const listItemHome = document.createElement('li');
headerLinksUl.appendChild(listItemHome);

const listItemHomeLink = document.createElement('a'); //home link
listItemHome.appendChild(listItemHomeLink);
listItemHomeLink.classList.toggle('listItemHomeLink');
listItemHomeLink.textContent = 'Home';

//menu
const listItemMenu = document.createElement('li');
headerLinksUl.appendChild(listItemMenu);

const listItemMenuLink = document.createElement('a');
listItemMenu.appendChild(listItemMenuLink);
listItemMenuLink.classList.toggle('listItemMenuLink');
listItemMenuLink.textContent = 'Menu';

//contact
const listItemContactUs = document.createElement('li');
headerLinksUl.appendChild(listItemContactUs);

const listItemContactUsLink = document.createElement('a');
listItemContactUs.appendChild(listItemContactUsLink);
listItemContactUsLink.classList.toggle('listItemContactUsLink');
listItemContactUsLink.textContent = 'Contact Us';
//HEADER BANNER END


//content area
const contentArea = document.createElement('div');
document.body.appendChild(contentArea);
contentArea.classList.toggle('contentArea');

// contentArea.append(homepage()); //initialize home page
contentArea.append(homepage()); //initialize home page

listItemContactUsLink.addEventListener('click', (event) => {
    console.log(event);
    contentArea.replaceChildren(contact());
});

listItemHomeLink.addEventListener('click', (event) => {
    console.log(event);
    contentArea.replaceChildren(homepage());
});


listItemMenuLink.addEventListener('click', (event) => {
    console.log(event);
    contentArea.replaceChildren(menu());
});

