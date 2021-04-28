let faker = require('faker');

function generateProducts() {
    let products = [];
    for (let index = 1; index <= 10000; index++) {
      let name = faker.vehicle.vehicle();
      let price = faker.random.number({min: 1, max: 5}) * 1000000
      let quantity = faker.random.number({min: 1, max: 9}) * 100
      let selected = faker.random.boolean()
      let available = faker.random.boolean()
  
          products.push({
              "id": index,
              "name": name,
              "price": price,
              "quantity": quantity, 
              "selected": selected,
              "available": available
          })
      }
      return {"products": products}
      
  }
  module.exports = generateProducts