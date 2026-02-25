let products = [
    { name: "Mobile", category: "Electronics", price:10000 },
    { name: "Laptop", category: "Electronics", price:50000 },
    { name: "Tablet", category: "Electronics", price:30000  },
    { name: "Table", category: "Furniture", price: 8000 },
    { name: "Chair", category: "Furniture", price: 1000 },
    { name: "Pen", category: "Stationery", price: 400 },
    { name: "Bag", category: "Accessories" , price: 1200}
];
let totprice=0
function calculateTotal(arr){
    for (let index = 0; index < arr.length; index++) {
        totprice=totprice+ arr[index].price
    }
}
calculateTotal(products)
console.log(products)
console.log(totprice)