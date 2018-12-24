var cornerPhones = {
     company: "Apple",
     phone: "iPhone X",
     cost: 999.99,
     monthlySales: 500,
     };
     
     for (var i in cornerPhones) {
          console.log(i, "is", cornerPhones[i]);
     }
console.log( "Total revenue is", cornerPhones.cost * cornerPhones.monthlySales + ".");
