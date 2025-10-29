import { OrderStatus } from "../interfaces/order-status";
import { Message } from "../messaging";
import { Persistance } from "../persistence";
import { ShoppingCart } from "./shoppingCart-SRP";

export class Order {
  private _orderStatus: OrderStatus = "open"; //
  private message: Message = new Message();
  private persistance: Persistance = new Persistance();
  constructor(private cart: ShoppingCart) {}

  //
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Shopping Cart is empty.");
      return;
    }
    this._orderStatus = "closed";
    this.message.sendMessage("Order received.");
    this.persistance.saveOrder();
    this.cart.clear();
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
