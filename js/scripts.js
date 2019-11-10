class Pizza {
   constructor(type, size, crust, toppings, quantity, delivery) {
      this.type = type;
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.quantity = quantity;
      this.delivery = delivery;
   }
   typePrice() {
      if (this.type == "CHICKEN SUPREME") {
         this.price = 0;
         return this.price;
      } else {
         return this.price;
      }
   }
   priceBySize() {
      if (this.size == "Large") {
         return 1500;
      } else if (this.size == "Medium") {
         return 1000;
      } else {
         return 500;
      }
   }
   crustPrice() {
      if (this.crust == "Tripple Cheese Crust") {
         return 400;
      } else if (this.crust == "Double Cheese Crust") {
         return 300;
      } else if (this.crust == "Puff Pastry") {
         return 200;
      } else if (this.crust == "Cheesy Crust") {
         return 150;
      } else {
         return 0;
      }
   }