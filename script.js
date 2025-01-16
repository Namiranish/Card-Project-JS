const details = document.getElementById('details');

function collectData(){
    let firstName = prompt('Enter First Name');
    let lastName = prompt('Enter Last Name');
    let country = prompt('Enter Country');
    let phoneNumber = prompt('Enter Phone Number');
    let state = prompt('Enter State');
    let city = prompt('Enter City');
    let village = prompt('Enter Village');

    const Userdata = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village
    }
    
    localStorage.setItem('userInfo', JSON.stringify(Userdata)); //converted obj to string
    displayData()
}

function displayData(){
    let savedData = localStorage.getItem('userInfo');
    let Userdata = JSON.parse(savedData);
    if(Userdata){
        details.innerHTML = 
        `<ul>
        <li>First Name:<span>${Userdata.firstName}</span></li>
        <li>Last Name:<span>${Userdata.lastName}</span></li>
        <li>Country:<span>${Userdata.country}</span></li>
        <li>Phone Number:<span>${Userdata.phoneNumber}</span></li>
        <li>State:<span>${Userdata.state}</span></li>
        <li>City:<span>${Userdata.city}</span></li>
        <li>Village:<span>${Userdata.village}</span></li>
    </ul>`
    }
}

window.onload = displayData