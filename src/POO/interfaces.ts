interface PaymentMethod {
  method(): void;
}

export class DebitPayment implements PaymentMethod {
  method(): void {
    console.log("Debit payment!");
  }
}
