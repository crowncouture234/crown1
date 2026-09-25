document.addEventListener("DOMContentLoaded", function () {

    const signupForm = document.getElementById("signupForm");


    /* SHOW / HIDE PASSWORD */

    const toggleButtons = document.querySelectorAll(".cc-signup-toggle");

    toggleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = this.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);
            const icon = this.querySelector("i");

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                icon.classList.remove("bi-eye");
                icon.classList.add("bi-eye-slash");

            } else {

                passwordInput.type = "password";

                icon.classList.remove("bi-eye-slash");
                icon.classList.add("bi-eye");

            }

        });

    });


    /* SIGN UP FORM */

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const button =
            signupForm.querySelector(".cc-signup-btn");


        /* CHECK PASSWORDS */

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }


        /* BUTTON */

        button.innerHTML =
            'CREATING ACCOUNT <i class="bi bi-arrow-repeat"></i>';

        button.disabled = true;


        setTimeout(function () {

            button.innerHTML =
                'ACCOUNT CREATED <i class="bi bi-check-lg"></i>';

            button.style.background = "#556b2f";


            setTimeout(function () {

                window.location.href = "account.html";

            }, 1200);

        }, 1000);

    });

});