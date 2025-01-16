const details = document.getElementById('details');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

function createojb(firstName, lastName, country, phoneNumber, state, city, village) {
    const Userdata = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village
    };

    setData(Userdata);
}

function collectData() {
    let firstName = prompt('Enter First Name');
    let lastName = prompt('Enter Last Name');
    let country = prompt('Enter Country');
    let phoneNumber = prompt('Enter Phone Number');
    let state = prompt('Enter State');
    let city = prompt('Enter City');
    let village = prompt('Enter Village');

    createojb(firstName, lastName, country, phoneNumber, state, city, village);
}

function setData(Userdata) {
    localStorage.setItem('userInfo', JSON.stringify(Userdata));
    displayData();
}

function displayData() {
    let savedData = localStorage.getItem('userInfo');
    if (savedData) {
        let Userdata = JSON.parse(savedData);
        details.innerHTML = `
            <ul>
                <li>First Name: <span>${Userdata.firstName}</span></li>
                <li>Last Name: <span>${Userdata.lastName}</span></li>
                <li>Country: <span>${Userdata.country}</span></li>
                <li>Phone Number: <span>${Userdata.phoneNumber}</span></li>
                <li>State: <span>${Userdata.state}</span></li>
                <li>City: <span>${Userdata.city}</span></li>
                <li>Village: <span>${Userdata.village}</span></li>
            </ul>`;
    } else {
        details.innerHTML = "<p>No user data found. Please enter information.</p>";
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

window.onload = () => {
    const savedData = localStorage.getItem('userInfo');
    if (!savedData) {
        collectData();
    } else {
        displayData();
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', toggleTheme);
};
