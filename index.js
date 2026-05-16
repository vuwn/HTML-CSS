// class = provides a more structured and cleaner way to work with objects

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }

  calculateToTal(saleTax) {
    return this.price + this.price * saleTax;
  }
}

const saleTax = 0.5;

const product1 = new Product("Laptop", 999.99);
const product2 = new Product("Phone", 399.99);
const product3 = new Product("Television", 1999.99);

product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

const total = product1.calculateToTal(saleTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
