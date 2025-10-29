import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shoppingCart-SRP";

const shoppingCart = new ShoppingCart();
const newOrder = new Order(shoppingCart);
shoppingCart.addItem(new Product("Iphone", 799.9));
shoppingCart.addItem(new Product("Apple Watch", 299.9));
shoppingCart.addItem(new Product("Ipad", 499.9));

console.log(shoppingCart.items);
console.log(
  `Your Shopping Cart total is: $ ${shoppingCart.total().toFixed(2)}`
);
newOrder.checkout();
console.log(newOrder.orderStatus);
