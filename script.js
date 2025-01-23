// validateForm.js

const validateForm = (name, email, phone, password, confirmPassword) => {
    if (!name || !email || !phone || !password) {
        return "All fields should be entered";
    }
    if (password !== confirmPassword) {
        return "Password mismatch";
    }
    if (!email.includes("@")) {
        return "Enter a valid email";
    }
    return "Success";
};

// handleSubmit function interacting with the DOM
const handleSubmit = () => {
    const name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    const result = validateForm(name, email, phone, password, confirmPassword);

    if (result === "Success") {
        console.log("Form submitted successfully:", { name, email, phone });
        alert("Registration successful!");
    } else {
        alert(result); // Display the validation error
    }
};
module.exports={validateForm}