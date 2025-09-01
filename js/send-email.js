function sendMail(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    
    // Get form values
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    // Prepare parameters for EmailJS (matching your template variables)
    let parms = {
        from_name: firstName + " " + lastName,  // Changed from 'name' to 'from_name'
        from_email: email,                      // Changed from 'email' to 'from_email'
        message: message
    };
    
    // Send email via EmailJS
    emailjs.send("service_q3a5z3w", "template_joyr3nf", parms)
        .then(() => {
            alert("Email enviado com sucesso.");
            // Reset the form after successful submission
            document.querySelector(".contact-form").reset();
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("Erro ao enviar email. Tente novamente.");
        });
    }