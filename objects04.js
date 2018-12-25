var hotel = {
     name: "Vacation Paradise",
     brand: "Restful Stay",
     hotelRooms: 150,
     avgCost: 179.99,
};
var global = hotel.hotelRooms * hotel.avgCost

console.log(hotel.brand, "most profitable hotel,", hotel.name, ", has a max possible nightly revenue of", global.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + ".")
