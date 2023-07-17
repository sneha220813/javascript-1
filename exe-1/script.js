
document.getElementById("submitButton").addEventListener("click", displaySuccessMessage);

function displaySuccessMessage() {
    var userId = document.getElementById("userId").value;
    var userName = document.getElementById("userName").value;
    var cityName = document.getElementById("cityName").value;

    var successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Success! User ID: " + userId + ", Name: " + userName + ", City: " + cityName;
}