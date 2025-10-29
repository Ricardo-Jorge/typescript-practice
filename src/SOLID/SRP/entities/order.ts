import { OrderStatus } from "../interfaces/order-status";
import { Message } from "../services/messaging";
import { Persistance } from "../services/persistence";
import { Discount } from "./discount";
import { ShoppingCart } from "./shoppingCart-SRP";

export class Order {
  private _orderStatus: OrderStatus = "open"; //
  private message: Message = new Message();
  private persistance: Persistance = new Persistance();
  private readonly discountStrategy!: Discount;
  constructor(private cart: ShoppingCart) {}

  //
  checkout(discountStrategy?: Discount): void {
    if (this.cart.isEmpty()) {
      console.log("Shopping Cart is empty.");
      return;
    }

    if (discountStrategy) {
      this._orderStatus = "closed";
      this.message.sendMessage(
        `Your total order with Black Friday discount: $ ${this.cart
          .totalWithDiscount()
          .toFixed(2)} was received.`
      );
      this.persistance.saveOrder();
      this.cart.clear();
    } else {
      this._orderStatus = "closed";
      this.message.sendMessage(
        `Your total order of $ ${this.cart.total().toFixed(2)} was received.`
      );
      this.persistance.saveOrder();
      this.cart.clear();
    }
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
