let products = [
    { name: "Mobile", category: "Electronics" },
    { name: "Laptop", category: "Electronics" },
    { name: "Tablet", category: "Electronics" },
    { name: "Table", category: "Furniture" },
    { name: "Chair", category: "Furniture" },
    { name: "Pen", category: "Stationery" },
    { name: "Bag", category: "Accessories" }
];

function filterProducts(products, criteria) {
    return products.filter(product => product.category === criteria);
}
let ans=prompt("Enter the filter:")
let result = filterProducts(products, ans);
console.log(products)
console.log(result);