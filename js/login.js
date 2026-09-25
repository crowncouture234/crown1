document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const password = document.getElementById("loginPassword");
    const togglePassword = document.getElementById("togglePassword");


    /* SHOW / HIDE PASSWORD */

    togglePassword.addEventListener("click", function () {

        const icon = this.querySelector("i");

        if (password.type === "password") {

            password.type = "text";

            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");

        } else {

            password.type = "password";

            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");

        }

    });


    /* LOGIN FORM */

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = loginForm.querySelector(".cc-login-btn");

        button.innerHTML =
            'LOGGING IN <i class="bi bi-arrow-repeat"></i>';

        button.disabled = true;


        setTimeout(function () {

            button.innerHTML =
                'LOGIN SUCCESSFUL <i class="bi bi-check-lg"></i>';

            button.style.background = "#556b2f";


            setTimeout(function () {

                window.location.href = "account.html";

            }, 1200);

        }, 1000);

    });

});