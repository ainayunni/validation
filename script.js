function validateFullName() {
    var fullname = document.getElementById('fullname').value;
    if (fullname.length == 0) {
        inputFieldChecks("Please enter your full name", "fullnameLabel", "red");
        fullname.ClassName = "fullname";
        return false;
    } else if (!fullname.match(/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/g)) {
        inputFieldChecks("Please enter your full name", "fullnameLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "fullnameLabel", "green");
        return true;
    }
}

function validateMatricNo() {
    var matricno = document.getElementById('matricno').value;
    if (matricno.length == 0) {
        inputFieldChecks("Please enter your Matric Number", "matricnoLabel", "red");
        matricno.ClassName = "matricno";
        return false;
    } else if (!matricno.match(/^[0-9]{7}$/g)) {
        inputFieldChecks("Your matric number should only be 7 numeric value", "matricnoLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "matricnoLabel", "green");
        return true;
    }
}

function validateCurrentAdd() {
    var currentaddress = document.getElementById('currentaddress').value;
    if (currentaddress.length == 0) {
        inputFieldChecks("Please enter your Current Address", "currentaddressLabel", "red");
        return false;
    } else if (!currentaddress.match(/^([a-zA-Z,-]){0,50}\s?([a-zA-Z,-?]\s?){0,50}\S$/g)) {
        inputFieldChecks("Your address should not include any special characters", "currentaddressLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "currentaddressLabel", "green");
        return true;
    }
}

function validateHomeAdd() {
    var homeaddress = document.getElementById('homeaddress').value;
    if (homeaddress.length == 0) {
        inputFieldChecks("Please enter your Home Address", "homeaddressLabel", "red");
        return false;
    } else if (!homeaddress.match(/^([a-zA-Z,-]){0,50}\s?([a-zA-Z,-?]\s?){0,50}\S$/g)) {
        inputFieldChecks("Your address should not include any special characters", "homeaddressLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "homeaddressLabel", "green");
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        inputFieldChecks("An email address is required", "emailLabel", "red");
        return false;
    } else if (!email.match(/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-z]+$/g)) {
        inputFieldChecks("Your email should be in this format example@company.com", "emailLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "emailLabel", "green");
        return true;
    }
}

function validateMobileNo() {
    var mobileno = document.getElementById('mobileno').value;
    if (mobileno.length == 0) {
        inputFieldChecks("Please enter a valid mobile number", "mobilenoLabel", "red");
        return false;
    } else if (!mobileno.match(/^\d{2,3}-?(\d{3}-?\d{4}|\d{4}-?\d{3})$/)) {
        inputFieldChecks("Your mobile number be in this format e.g 0123456789", "mobilenoLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "mobilenoLabel", "green");
        return true;
    }
}

function validatePhoneNo() {
    var phoneno = document.getElementById('phoneno').value;
    if (phoneno.length == 0) {
        inputFieldChecks("A phone number is required", "phonenoLabel", "red");
        return false;
    } else if (!phoneno.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}$/g)) {
        inputFieldChecks("Your phone number should have this format e.g 0366301122", "phonenoLabel", "red");
        return false;
    } else {
        inputFieldChecks("&#x2705;", "phonenoLabel", "green");
        return true;
    }
}

function inputFieldChecks(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
