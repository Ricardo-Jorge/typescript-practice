export class Cart {
  private readonly products: Array<Product> = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  quantity(): number {
    return this.products.length;
  }

  getProducts() {
    let i = 1;
    this.products.forEach((product) => {
      if (product !== undefined) {
        console.log(
          `${i}° Product: ${product.getName()}, Price: $ ${product.getPrice()} `
        );
        i++;
      }
    });
  }

  total() {
    let total = 0;
    this.products.forEach((product) => {
      total += product.getPrice();
    });
    return total;
  }
}

export class Product {
  constructor(private name: string, private price: number) {}

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const newCart = new Cart();

newCart.addProduct(new Product("PC", 599.99));
newCart.addProduct(new Product("Iphone", 799.99));
newCart.addProduct(new Product("Playstation 5", 499));
newCart.addProduct(new Product("Apple Watch", 299.99));

console.log(newCart.getProducts());
console.log(
  `You have a total of ${newCart.quantity()} itens, and your total is: $ ${newCart
    .total()
    .toFixed(2)}`
);
