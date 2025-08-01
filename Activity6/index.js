let inventory = [];
function addProduct(inventory_product) {
    inventory.push(inventory_product);
}
function removeProduct(inventory_product_name) {
    inventory = inventory.filter(product => product.name !== inventory_product_name);
}
function updateQuantity(inventory_product_name, object_values) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name == inventory_product_name) {
            for (let key in object_values) {
                inventory[i][key] = object_values[key];
            }
        }
    }
}
function calculateTotalValue() {
    let sum = 0;
    inventory.forEach(object_reference => {
        sum += (object_reference.price * object_reference.quantity);
    });
    return sum;
}
function listProduct() {
    inventory.forEach(product => { console.log(JSON.stringify(product)); });
}
addProduct({name:"books",price : 40, quantity:5});
addProduct({name:"pen",price : 20, quantity:5});
addProduct({name:"laptop",price : 100040, quantity:5});
console.log("After adding objects in inventory");
listProduct();
console.log("After removing pen from inventory");
removeProduct("pen");
listProduct();
console.log("After updating the price of laptop");
updateQuantity("laptop",{price:85000});
listProduct();
console.log("The total sum or cost of inventory : "+calculateTotalValue());
