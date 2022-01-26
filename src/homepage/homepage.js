import './homepage.css';

export default function homepage() {
    const homePageHeaderDiv = document.createElement('div');
    homePageHeaderDiv.classList.toggle('homePageHeaderDiv');

    //about us
    const aboutUs = document.createElement('div');
    aboutUs.classList.toggle('aboutUs');
    homePageHeaderDiv.appendChild(aboutUs);

    //about us heading
    const aboutUsHeading = document.createElement('h3');
    aboutUsHeading.classList.toggle('aboutUsHeading');
    aboutUs.appendChild(aboutUsHeading);
    aboutUsHeading.textContent = 'About Us'

    //about us description
    const aboutUsDescription = document.createElement('p');
    aboutUsDescription.classList.toggle('aboutUsDescription');
    aboutUs.appendChild(aboutUsDescription);
    aboutUsDescription.textContent = "Ice cream cravings can strike anytime, anyplace. That's why we created new and exciting recipies for your frozen fix. Crafted with perfection and everything nice, iceboys creams is here to deliver exactly what you want, when you want it. Go through our menu, order and enjoy!!!"

    //hours
    const hours = document.createElement('div');
    hours.classList.toggle('hours');
    homePageHeaderDiv.appendChild(hours);

    //hoursheading
    const hoursHeading = document.createElement('h3');
    hours.appendChild(hoursHeading);
    hoursHeading.classList.toggle('hoursHeading')
    hoursHeading.textContent = 'Hours';

    //hoursdetails
    const hoursDetails = document.createElement('div');
    hoursDetails.classList.toggle('hoursDetails');
    hours.appendChild(hoursDetails);

    const hoursDetailsUL = document.createElement('ul');
    hoursDetails.appendChild(hoursDetailsUL);
    hoursDetailsUL.classList.toggle('hoursDetailsUL');

    const hoursheadingsun = document.createElement('li');
    const hoursheadingmon = document.createElement('li');
    const hoursheadingtue = document.createElement('li');
    const hoursheadingwed = document.createElement('li');
    const hoursheadingthu = document.createElement('li');
    const hoursheadingfri = document.createElement('li');
    const hoursheadingsat = document.createElement('li');

    hoursDetailsUL.append(hoursheadingsun,
        hoursheadingmon,
        hoursheadingtue,
        hoursheadingwed,
        hoursheadingthu,
        hoursheadingfri,
        hoursheadingsat);


    hoursheadingsun.innerHTML = "<strong>Sunday:</strong> 11:30 am - 10:00 pm";
    hoursheadingmon.innerHTML = "<strong>Monday:</strong> 3:00 pm - 10:00 pm";
    hoursheadingtue.innerHTML = "<strong>Tuesday:</strong> 3:00 pm - 10:00 pm";
    hoursheadingwed.innerHTML = "<strong>Wednesday:</strong> 3:00 pm - 10:00 pm";
    hoursheadingthu.innerHTML = "<strong>Thursday:</strong> 3:00 pm - 10:00 pm";
    hoursheadingfri.innerHTML = "<strong>Friday:</strong> 3:00 pm - 10:00 pm";
    hoursheadingsat.innerHTML = "<strong>Saturday:</strong> 11:30 am - 10:00 pm";

        //location
    const location = document.createElement('div');
    homePageHeaderDiv.appendChild(location);
    location.classList.toggle('location');
    

    const locationHeading = document.createElement('h3');
    location.appendChild(locationHeading);
    locationHeading.classList.toggle('locationHeading')
    locationHeading.textContent = 'Location';

    const locationAddress = document.createElement('p');
    location.appendChild(locationAddress);
    location.classList.toggle('locationAddress');
    locationAddress.textContent = '123, Main street, City, State 00000';

    return homePageHeaderDiv;    
}
