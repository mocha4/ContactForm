// Wait for the document to load
$(document).ready(function() {
  // Select the form element
  const form = document.getElementById("contactForm");

  // Validate the form fields
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check validity of form fields
    if (!form.checkValidity()) {
      // If form is invalid, trigger browser's validation UI
      form.reportValidity();
      return;
    }

    const title = document.getElementById("title").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const file = document.getElementById("fileUpload").value;
    const message = document.getElementById("message").value;

    // Store form field values in local storage
    localStorage.setItem("title", title);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("dob", dob);
    localStorage.setItem("telephone", telephone);
    localStorage.setItem("file", fileUpload);
    localStorage.setItem("message", message);
    localStorage.setItem("email", email);

    // Redirect to result page
    window.location.href = "result.html";
  });

  // Set up validation rules for form fields
  const rules = {
    title: 'required',
    firstName: {
      required: true,
      maxlength: 30,
    },
    lastName: {
      required: true,
      maxlength: 30,
    },
    telephone: {
      required: true,
      minlength: 10,
      maxlength: 10,
      digits: true
    },
    fileUpload: {
      //required: true,
      extension: 'pdf|jpg|jpeg|png'
    },
    email: {
      required: true,
      email: true
    },
    message: {
      //required: true,
      maxlength: 300
    }
  };

  // Set up validation messages for form fields
  const messages = {
    title: 'Please select your title.',
    firstName: {
      required: 'Please enter your first name.',
      maxlength: 'Please enter less than 30 letters.',
    },
    lastName: {
      required: 'Please enter your last name.',
      maxlength: 'Please enter less than 30 letters.',
    },
    telephone: {
      required: 'Please enter your telephone number.',
      minlength: 'Please enter a valid 10-digit number.',
      maxlength: 'Please enter a valid 10-digit number.',
      digits: 'Please enter a valid 10-digit number.'
    },
    fileUpload: {
      //required: 'Please upload a file.',
      extension: 'Please upload in PDF or image format.'
    },
    email: {
      required: 'Please enter your email address.',
      email: 'Please enter a valid email address.'
    },
    message: {
      //required: 'Please enter a message.',
      maxlength: 'Please enter a message with no more than 300 characters.'
    }
  };

  // Initialize the validator with the rules and messages
  $(form).validate({
    rules: rules,
    messages: messages
  });
});



