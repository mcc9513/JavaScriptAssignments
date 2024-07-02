// Initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  // Add an item to the cart
  function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Remove an item from the cart by id
  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Display the cart contents in the console
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  }
  
  // Initialize the cart on page load
  initializeCart();
  
  // Event listener for the add item form
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    // parseFloat converts string to floating-point number (num w decimals)
      const itemId = Date.now().toString();
      //creates uniqe id using current time stamp
     
    const item = {
      id: itemId,
      name: itemName,
      price: itemPrice
    };
    
    addItem(item);
  
    document.getElementById('addItemForm').reset();
  });
  
  // Event listener for the display cart button
  document.getElementById('displayCartButton').addEventListener('click', displayCart);
