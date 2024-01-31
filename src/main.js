var firebaseConfig = {
    apiKey: "AIzaSyCxVVcoDCf1xUAkijjE-SJ0sT6gIPlm0y8",
    authDomain: "lowkey-365f7.firebaseapp.com",
    projectId: "lowkey-365f7",
    storageBucket: "lowkey-365f7.appspot.com",
    messagingSenderId: "1035139135538",
    appId: "1:1035139135538:web:e400ee2968b508fa7a642b",
    measurementId: "G-MX66ZYGEKX"
};
const auth =firebase.auth();
var database_ref = firebase.database().ref();

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
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = document.getElementById("signupEmail").value
        const password = document.getElementById("signupPassword").value
        const username = document.getElementById("signupUsername").value
        if (e.target.id === "confirmPassword" && e.target.value !== document.getElementById("signupPassword").value) {
            setInputError(e.target, "Passwords do not match");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                database_ref.child('users/' + user.uid).set({
                    username : username,
                    email : email,
                    password: password
                })
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/invalid-email') {
                    // Display the "Invalid email address" message only for invalid email errors
                    setFormMessage(createAccountForm, "error", "Invalid email address");
                }
                if (errorCode === 'auth/email-already-in-use') {
                    setFormMessage(createAccountForm, "error", "The email address is already in use by another account");
                }
                console.log("Create Account error:", errorCode, errorMessage);
            });
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
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Password must be at least 6 characters in length");
            
            }
            if (e.target.id === "confirmPassword" && e.target.value !== document.getElementById("signupPassword").value) {
                setInputError(inputElement, "Passwords do not match");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});