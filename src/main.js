var firebaseConfig = {
    apiKey: "AIzaSyCxVVcoDCf1xUAkijjE-SJ0sT6gIPlm0y8",
    authDomain: "lowkey-365f7.firebaseapp.com",
    projectId: "lowkey-365f7",
    storageBucket: "lowkey-365f7.appspot.com",
    messagingSenderId: "1035139135538",
    appId: "1:1035139135538:web:e400ee2968b508fa7a642b",
    measurementId: "G-MX66ZYGEKX"
  };
  
  // Initialize Firebase
  const auth = firebase.auth()
  const database = firebase.database()

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
function register(){
    signupEmail = document.getElementById('signupEmail').value;
    signupPassword = document.getElementById('signupPassword').value;

    if (validate_email(singupEmail) == false || validate_password(signupPassword) == false){
        return;
    }

    auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then(function() {
        var user = auth.currentUser;
        var database_ref = database.ref();
        var user_data = {
            singupEmail : signupEmail,
            last_login : Date.now()
        };

        database_ref.child('users/' +user.uid).set(user_data);

        alert('User Created');
    })
    .catch(function(error) {
        var error_message = error.message;

        alert(error_message);
    })
}

function validate_email(signupEmail) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(signupEmail)
    if (expression.test(signupEmail) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(signupPassword) {
    if (signupPassword < 6) {
        return false
    } else {
        return true
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    });
    
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function() {
            // Login successful, redirect to the homepage
            window.location.href = "homepage.html";
            })
            .catch(function(error) {
            // Handle errors here            
            setFormMessage(loginForm, "error", "Invalid username/password combination");
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Login error:", errorCode, errorMessage);
            });
       });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 4) {
                setInputError(inputElement, "Username must be at least 3 characters in length");
                
            }
            if (e.target.id === "signupUsername" && e.target.value.length > 25) {
                setInputError(inputElement, "Username can't be greater than 25 characters in length");
                
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});