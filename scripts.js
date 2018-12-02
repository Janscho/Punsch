var beverages = []

function add(beverage) {
    beverages.push(beverage)
    
    const sum = beverages.reduce(function(result,item) {
        return result + item.price;
    }, 0);
    
    document.getElementById('result').innerHTML = sum
}

document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
        event.preventDefault();
    }
}, false);