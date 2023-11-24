let cartItems = [];
let cartTotal = 0;

function addToCart() {
    // You can customize this function to add the selected product to the cart
    // For simplicity, let's assume the product price is always $19.99
    const productPrice = 19.99;

    cartItems.push({
        name: 'Product Name',
        price: productPrice
    });

    cartTotal += productPrice;

    updateCart();
}

function viewCart() {
    alert("Cart Items: " + JSON.stringify(cartItems) + "\nTotal: $" + cartTotal.toFixed(2));
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear the existing cart items
    cartItemsElement.innerHTML = '';

    // Add the updated cart items
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    // Update the total amount
    cartTotalElement.textContent = cartTotal.toFixed(2);
}
