let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

const destinationSelect = document.getElementById('destination');
const citySelect = document.getElementById('city');

const citiesByState = {
    'Andhra Pradesh': [
        'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry'
    ],
    'Arunachal Pradesh': [
        'Itanagar', 'Naharlagun', 'Tawang', 'Bomdila', 'Ziro', 'Pasighat'
    ],
    'Assam': [
        'Guwahati', 'Dispur', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur'
    ],
    'Bihar': [
        'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Purnia'
    ],
    'Chhattisgarh': [
        'Raipur', 'Bilaspur', 'Bhilai', 'Korba', 'Durg', 'Raigarh'
    ],
    'Goa': [
        'Panaji', 'Vasco da Gama', 'Margao', 'Mapusa', 'Ponda', 'Salcete'
    ],
    'Gujarat': [
        'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'
    ],
    'Haryana': [
        'Chandigarh', 'Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat'
    ],
    'Himachal Pradesh': [
        'Shimla', 'Dharamshala', 'Mandi', 'Solan', 'Kullu', 'Chamba'
    ],
};

destinationSelect.addEventListener('change', () => {
    const selectedState = destinationSelect.value;
    const cities = citiesByState[selectedState] || [];

    citySelect.innerHTML = '';

    if (cities.length === 0) {
        citySelect.disabled = true;
        citySelect.innerHTML = '<option value="" disabled selected>No cities available</option>';
    } else {
        citySelect.disabled = false;
        citySelect.innerHTML = '<option value="" disabled selected>Select a City</option>';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

// React.js

// import React, { useState } from 'react';

// const citiesByState = {
//   'Andhra Pradesh': [
//     'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry'
//   ],
//   'Arunachal Pradesh': [
//     'Itanagar', 'Naharlagun', 'Tawang', 'Bomdila', 'Ziro', 'Pasighat'
//   ],
//   'Assam': [
//     'Guwahati', 'Dispur', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur'
//   ],
//   'Bihar': [
//     'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Purnia'
//   ],
//   'Chhattisgarh': [
//     'Raipur', 'Bilaspur', 'Bhilai', 'Korba', 'Durg', 'Raigarh'
//   ],
//   'Goa': [
//     'Panaji', 'Vasco da Gama', 'Margao', 'Mapusa', 'Ponda', 'Salcete'
//   ],
//   'Gujarat': [
//     'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'
//   ],
//   'Haryana': [
//     'Chandigarh', 'Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat'
//   ],
//   'Himachal Pradesh': [
//     'Shimla', 'Dharamshala', 'Mandi', 'Solan', 'Kullu', 'Chamba'
//   ],
// };

// const Navbar = () => {
//   const [isNavbarCollapseVisible, setNavbarCollapseVisible] = useState(false);
//   const [selectedState, setSelectedState] = useState('');
//   const [cities, setCities] = useState([]);

//   const handleScroll = () => {
//     const navbarDiv = document.querySelector('.navbar');
//     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//       navbarDiv.classList.add('navbar-cng');
//     } else {
//       navbarDiv.classList.remove('navbar-cng');
//     }
//   };

//   const handleNavbarShowClick = () => {
//     setNavbarCollapseVisible(true);
//   };

//   const handleNavbarCloseClick = () => {
//     setNavbarCollapseVisible(false);
//   };

//   const handleBodyClick = (e) => {
//     if (
//       e.target.id !== 'navbar-collapse' &&
//       e.target.id !== 'navbar-show-btn' &&
//       e.target.parentElement.id !== 'navbar-show-btn'
//     ) {
//       setNavbarCollapseVisible(false);
//     }
//   };

//   const handleResize = () => {
//     document.body.classList.add('resize-animation-stopper');
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//       document.body.classList.remove('resize-animation-stopper');
//     }, 400);
//   };

//   const handleDestinationChange = (e) => {
//     const selectedState = e.target.value;
//     const cities = citiesByState[selectedState] || [];
//     setSelectedState(selectedState);
//     setCities(cities);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div className={`navbar ${isNavbarCollapseVisible ? 'navbar-cng' : ''}`}></div>
//       {/* Other Navbar-related elements and event listeners */}
      
//       {/* City Selector */}
//       <select id="destination" onChange={handleDestinationChange}>
//         {/* Options for states */}
//       </select>
//       <select id="city" disabled={cities.length === 0}>
//         {/* Options for cities */}
//       </select>
//     </div>
//   );
// };

// export default Navbar;
