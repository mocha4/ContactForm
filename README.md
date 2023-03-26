# Contact Form
## About this Project:

 This project is a simple contact form with various fields including dropdown, date picker, mobile number input, file upload, email address, and a text field. 
 
 ![output1](https://user-images.githubusercontent.com/68205339/227747859-143d7d2d-5a4e-4dfd-be36-855d2c46434d.JPG)

 The form has mandatory fields that need to be validated before submission. On successful submission, the data entered by the user is collected and displayed on the next screen with a personalized thank you message.
 
 
 ![output2](https://user-images.githubusercontent.com/68205339/227747894-32eb7182-0cec-422c-a5ed-b48955e65015.JPG)

The external libraries included in the HTML file are Bootstrap and jQuery.
 Different parts of this project are contact.html, result.html, validation.js, contact_style.css and few images. 

### About contact.html
This is the main HTML file. The HTML file contains the layout and structure of a web page that displays a contact form. It includes several elements, such as the head section, which contains the metadata, the title of the page, and links to the external CSS and JavaScript files. The body section contains the form elements, including labels, input fields, and buttons, organized within a container and a form-box. The form also includes validation attributes and other form-related attributes, such as "required" and "maxlength."

### About result.html
This is a webpage that displays the data submitted by the user on the contact page. It uses the Flask framework to receive the form data, and then it dynamically generates HTML code to display the user's input. The data is displayed in a table format with each form field as a row and its corresponding value as the data in the adjacent column. The Flask framework receives the form data as a POST request and then passes it to the result.html page. The page then extracts the data from the request object and displays it in a user-friendly format. This allows the user to verify that their information was submitted correctly and provides confirmation that their message was received.

### About JavaScript file
The JavaScript file contains the code that validates the form. It waits for the document to load and selects the form element by its ID using jQuery. Then, it sets up validation rules and messages for each field in the form using the jQuery Validation Plugin. For example, it requires the title, first name, last name, telephone number, and email fields to be filled and validates the telephone number to ensure that it is ten digits long and contains only numbers. It also sets up validation for the file upload field to only accept PDF, JPEG, JPG, or PNG files.



## How to run this Project:
1) Create a folder anywhere.
2) Add contact.html, result.html, validation.js, contact_style.css into that folder.
3) Create another folder called img within this folder.
4) Add images i1.jpg, i2.jpg, i3.jpg, i4.jpg, and i5.jpg into img folder.
5) Project is ready. Run contact.html to check out the contact form.


