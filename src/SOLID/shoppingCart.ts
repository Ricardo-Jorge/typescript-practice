type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  public orderStatus: OrderStatus = "open";

  addItem(item: CartItem) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    let total = 0;
    for (const item of this._items) {
      total += item.price;
    }
    return total;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Shopping Cart is empty.");
      return;
    }
    this.orderStatus = "closed";
    this.sendMessage("Order received.");
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string) {
    console.log("Message sent:", msg);
  }

  saveOrder() {
    console.log("Your order has been saved!");
  }

  clear() {
    console.log("Shopping Cart cleared...");
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: "Iphone", price: 799.9 });
shoppingCart.addItem({ name: "Apple Watch", price: 299.9 });
shoppingCart.addItem({ name: "Ipad", price: 499.9 });

console.log(shoppingCart.items);
console.log(
  `Your Shopping Cart total is: $ ${shoppingCart.total().toFixed(2)}`
);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
