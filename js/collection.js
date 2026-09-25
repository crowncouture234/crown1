document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".cc-filter");
    const products = document.querySelectorAll(".collection-item");

    filters.forEach(filter => {

        filter.addEventListener("click", function () {

            filters.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const selected =
                this.getAttribute("data-filter");

            products.forEach(product => {

                const category =
                    product.getAttribute("data-category");

                if (
                    selected === "all" ||
                    category === selected
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });


    /* ================= WISHLIST ================= */

    const wishlistButtons =
        document.querySelectorAll(".cc-wishlist");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", function () {

            const icon = this.querySelector("i");

            icon.classList.toggle("bi-heart");
            icon.classList.toggle("bi-heart-fill");

        });

    });

});