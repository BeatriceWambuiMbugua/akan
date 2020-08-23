var femaleAkanName = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

var maleAkanName = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

document.getElementById("output").style.display = "none";

function onSubmit(){
    var day = daysOfTheWeek[calculateDay()];
    var name = getAkanName();
    document.getElementById("day").innerHTML = day;
    document.getElementById("name").innerHTML = name;
    document.getElementById("output").style.display = "block";
}

function getYear() {
    var year = document.getElementById("year").value;
    return year;
}

function getMonth() {
    var month = document.getElementById("monthID").value;
    return month;
}

function getDate() {
    var date = document.getElementById("dateID").value;
    return date;
}

function getGender() {
    var gender = document.getElementsByName("gender");
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            return gender[i].value;
        }
    }
}