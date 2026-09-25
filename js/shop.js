document.addEventListener("DOMContentLoaded", function () {
const categoryButtons =
    document.querySelectorAll(".cc-category-filter");

const sortSelect =
    document.getElementById("sortProducts");

const productGrid =
    document.getElementById("productGrid");


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active state
        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        this.classList.add("active");

        const selectedCategory =
            this.dataset.category;

        const products =
            productGrid.querySelectorAll(".cc-product-item");


        products.forEach(product => {

            const productCategory =
                product.dataset.category;

            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

});


/* =========================================
   SORT PRODUCTS
========================================= */

sortSelect.addEventListener("change", function () {

    const sortValue = this.value;

    const products = [
        ...productGrid.querySelectorAll(".cc-product-item")
    ];


    products.sort(function (a, b) {

        if (sortValue === "low") {

            return (
                Number(a.dataset.price) -
                Number(b.dataset.price)
            );

        }


        if (sortValue === "high") {

            return (
                Number(b.dataset.price) -
                Number(a.dataset.price)
            );

        }


        if (sortValue === "newest") {

            return (
                new Date(b.dataset.date) -
                new Date(a.dataset.date)
            );

        }


        // Featured
        return (
            Number(a.dataset.featured) -
            Number(b.dataset.featured)
        );

    });


    products.forEach(product => {

        productGrid.appendChild(product);

    });

});


});
