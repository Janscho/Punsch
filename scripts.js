var beverages = []

function add(beverage) {
    beverages.push(beverage)
    
    const sum = beverages.reduce(function(result,item) {
        return result + item.price;
    }, 0);
    
    document.getElementById('result').innerHTML = sum
}