export abstract class Discount {
  abstract applyDiscount(value: number): number;
}
export class blackFriday extends Discount {
  private discount: number = 0.5;
  applyDiscount(totalPrice: number): number {
    return totalPrice - totalPrice * this.discount;
  }
}
