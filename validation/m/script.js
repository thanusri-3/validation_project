function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById("message");

    if (confirmpassword.length > 0) {
        if (password === confirmpassword) {
            message.textContent = "Passwords match ✅";
            message.style.color = "green";
        } else {
            message.textContent = "Passwords do not match ❌";
            message.style.color = "red";
        }
    } else {
        message.textContent = "";
    }
}

function validateForm(event) {
    event.preventDefault(); // stop form from submitting before validation

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone-number").value.trim();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById("message");

    // 1. Validate Name
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Name must contain only letters.");
        return false;
    }

    // 2. Validate Email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    // 3. Validate Phone (10 digits)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    // 4. Validate Password Strength
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        return false;
    }

    // 5. Confirm Password
    if (password !== confirmpassword) {
        message.textContent = "Passwords do not match ❌";
        message.style.color = "red";
        return false;
    } else {
        message.textContent = "Passwords match ✅";
        message.style.color = "green";
    }

    alert("Form submitted successfully 🎉");
    return true;
}

