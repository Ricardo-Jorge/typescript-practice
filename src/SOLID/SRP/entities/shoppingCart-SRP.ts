import { CartItem } from "../interfaces/cart-item";
import { Product } from "./product";

export class ShoppingCart {
  private readonly _items: Product[] = [];

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear() {
    console.log("Shopping Cart cleared...");
    this._items.length = 0;
  }
}
