const student = {

    name: "Abdullah Aslam",

    age: 20,

    course: "Software Engineering",

    address: {

        city: "Okara",

        country: "Pakistan"

    },

    status: "Active"

};

const nameElement = document.getElementById("name");

const ageElement = document.getElementById("age");

const courseElement = document.getElementById("course");

const cityElement = document.getElementById("city");

const countryElement = document.getElementById("country");

const statusElement = document.getElementById("status");

const button = document.getElementById("toggleBtn");

nameElement.textContent = student.name;

courseElement.textContent = student.course;

ageElement.textContent = `🎂 Age : ${student.age}`;

cityElement.textContent = `📍 City : ${student.address.city}`;

countryElement.textContent = `🌍 Country : ${student.address.country}`;

statusElement.textContent = `🟢 Status : ${student.status}`;

ageElement.style.display="none";
cityElement.style.display="none";
countryElement.style.display="none";
statusElement.style.display="none";

let isVisible=false;

button.addEventListener("click",()=>{

    if(!isVisible){

        ageElement.style.display="block";
        cityElement.style.display="block";
        countryElement.style.display="block";
        statusElement.style.display="block";

        button.textContent="Hide Details";

        isVisible=true;

    }

    else{

        ageElement.style.display="none";
        cityElement.style.display="none";
        countryElement.style.display="none";
        statusElement.style.display="none";

        button.textContent="Show Details";

        isVisible=false;

    }

});