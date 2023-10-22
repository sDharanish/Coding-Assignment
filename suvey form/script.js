function submitForm() {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    
    if (
        firstName && lastName && dob && country && gender && profession && email && mobile
    ) {
        

        
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popup-content");

        popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        popup.style.display = "block";
    } else {
        alert("Please fill in all the required fields.");
    }
    

}


function resetform() {
    document.getElementById("surveyform").reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
