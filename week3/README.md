# F28WP-lab1

This is the report
1. *DOMContentLoaded Event Listener*:
   - The code starts by adding an event listener to the DOMContentLoaded event. This ensures that the JavaScript code runs only after the HTML document has been fully loaded.

2. *Form and Input Element Retrieval*:
   - It selects the form and various input fields from the HTML document using getElementById. These elements include the form itself (form), the username input (username), email input (email), password input (password), and confirm password input (confirmPassword).

3. *Error Handling Functions*:
   - Two functions, showError and clearError, are defined to handle error messages:
     - showError(input, message): This function displays an error message for a specific input field by updating the text content of the corresponding error element.
     - clearError(input): This function clears the error message for an input field by setting the text content of the corresponding error element to an empty string.

4. *Validation Functions*:
   - Four validation functions are defined for username, email, password, and confirm password fields:
     - validateUsername(): Checks if the username field is empty and displays an error message if necessary.
     - validateEmail(): Validates the email field by checking for an empty value and matching it against a regular expression to verify the email format. Appropriate error messages are displayed.
     - validatePassword(): Validates the password field for emptiness and minimum length. Error messages are displayed as needed.
     - validateConfirmPassword(): Validates the confirm password field by checking for emptiness and matching it against the password. Error messages are displayed accordingly.

5. *Real-Time Validation Event Listeners*:
   - Event listeners are added to each input field (username, email, password, and confirm password) with the event type 'blur'. This means that validation functions will be executed when the respective input fields lose focus (when the user clicks outside the input field).

6. *Form Submission Handler*:
   - An event listener is added to the form element (form) for the 'submit' event.
   - It prevents the default form submission behavior using event.preventDefault() to ensure the form is only submitted if all fields are valid.

7. *Final Validation and Submission*:
   - Inside the form submission handler, all four validation functions are called once more to ensure that all fields are valid.
