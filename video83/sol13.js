let products = [
    { name: "Mobile", category: "Electronics", price:10000, quantity:2 },
    { name: "Laptop", category: "Electronics", price:50000, quantity:1 },
    { name: "Tablet", category: "Electronics", price:30000, quantity:1 },
    { name: "Table", category: "Furniture", price: 8000, quantity:1 },
    { name: "Chair", category: "Furniture", price: 1000, quantity:2 },
    { name: "Pen", category: "Stationery", price: 400, quantity:4 },
    { name: "Bag", category: "Accessories" , price: 1200, quantity:1}
];
let totprice=0
function calculateTotal(arr){
    for (let index = 0; index < arr.length; index++) {
        totprice=totprice+(arr[index].price * arr[index].quantity)
    }
}
calculateTotal(products)
console.log(products)
console.log(totprice)