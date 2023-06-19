var cartItems = []; // Array to store the cart items

function addToCart(productName, price, imageUrl) {
  var product = {
    name: productName,
    price: price,
    imageUrl: imageUrl
  };
  cartItems.push(product); // Add the product to the cart
  updateCartDisplay(); // Update the cart display
}

function updateCartDisplay() {
  var cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = ""; // Clear the previous cart items

  // Loop through the cartItems array and display the items
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    var image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = item.name;
    image.classList.add("cart-item-image");

    var infoDiv = document.createElement("div");
    infoDiv.classList.add("cart-item-info");
    var name = document.createElement("h2");
    name.innerText = item.name;
    var price = document.createElement("p");
    price.innerText = "$" + item.price.toFixed(2);
    infoDiv.appendChild(name);
    infoDiv.appendChild(price);

    itemDiv.appendChild(image);
    itemDiv.appendChild(infoDiv);
    cartItemsDiv.appendChild(itemDiv);
  }
}
function updateCartDisplay() {
  var cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = ""; // Clear the previous cart items

  // Loop through the cartItems array and display the items
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var itemDiv = document.createElement("div");
    itemDiv.innerText = item.name + " - $" + item.price.toFixed(2); // Customize the display as per your product data
    cartItemsDiv.appendChild(itemDiv);
  }
}

function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items before checking out.");
    return;
  }
  // Implement the logic for the checkout process, such as redirecting to a payment page or submitting the cart items to the server.
  // You can access the cart items using the 'cartItems' array.
}