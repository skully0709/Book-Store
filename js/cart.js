

function updateWishlistCount() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    document.getElementById("wishlistCount").textContent = wishlist.length;
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
    updateWishlistCount();
    updateCartCount();
});