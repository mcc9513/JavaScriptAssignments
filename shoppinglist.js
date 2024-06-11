let shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

shoppingList[5] = 'fruit loops';

shoppingList[4] = 'fair trade coffee';

shoppingList.splice(2, 2, 'rice', 'beans');

let shoppingCart = [];

shoppingCart.push(shoppingList[5]);
shoppingList.pop();


shoppingCart.push(shoppingList[0]);
shoppingList.shift()

while (shoppingList.length > 0) {
    shoppingCart.push(shoppingList[0]);
    shoppingList.shift();
};

shoppingCart.sort();
shoppingCart.reverse();

console.log(shoppingCart.join(', '));
