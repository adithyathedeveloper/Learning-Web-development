let arr = ["mobile", "laptop", "tablet", "table", "chair", "pen", "bag"];
let resarr=[]
function filterProducts(products,criteria){ 
    if (criteria == "Electronics" || criteria == "electrical"|| criteria == "Electrical" || criteria == "electronics")    {
        for (let index = 0; index < 3; index++) {
            resarr.push(products[index])
        }
    }
    if (criteria =="regular"){
        for (let index = 3; index < products.length; index++) {
            resarr.push(products[index])
        }
    }
    }

filterProducts(arr,"regular")
console.log(arr)
console.log(resarr)