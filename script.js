const details = document.getElementById('details');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

function collectData() {
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
    };

    localStorage.setItem('userInfo', JSON.stringify(Userdata));
    displayData(); 
}

function displayData() {
    let savedData = localStorage.getItem('userInfo');
    if (savedData) {
        let Userdata = JSON.parse(savedData);
        details.innerHTML = `
            <ul>
                <li>First Name: <span>${Userdata.firstName || "N/A"}</span></li>
                <li>Last Name: <span>${Userdata.lastName || "N/A"}</span></li>
                <li>Country: <span>${Userdata.country || "N/A"}</span></li>
                <li>Phone Number: <span>${Userdata.phoneNumber || "N/A"}</span></li>
                <li>State: <span>${Userdata.state || "N/A"}</span></li>
                <li>City: <span>${Userdata.city || "N/A"}</span></li>
                <li>Village: <span>${Userdata.village || "N/A"}</span></li>
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
    collectData();
    displayData();

 
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    themeToggleBtn.addEventListener('click', toggleTheme);
};
