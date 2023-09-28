
        document.getElementById("subscribe-btn").addEventListener("click", function () {
            const email = document.getElementById("email").value;
            const message = document.getElementById("message");
    
            if (validateEmail(email)) {
                // Redirect to the thank-you page with the email as a query parameter
                window.location.href = `thankyou.html?email=${encodeURIComponent(email)}`;
            } else {
                message.textContent = "Invalid email address.";
                message.style.color = "red";
            }
        });
    
        function validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

