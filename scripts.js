var availableBeverages = [{name: 'Apfel-Amaretto Punsch', price: 2.80, labelId: 'appleCounterLabel'},
                          {name: 'Beerenpunsch', price: 2.80, labelId: 'berryCounterLabel'},
                          {name: 'Glühwein', price: 2.80, labelId: 'wineCounterLabel'},
                          {name: 'Kinderpunsch', price: 2.80, labelId: 'kidsCounterLabel'},
                          {name: 'Bier', price: 2.50, labelId: 'beerCounterLabel'},
                          {name: 'Häferl', price: 2.50, labelId: 'cupCounterLabel'}]
var selectedBeverages = [];

function add(beverage) {
    var obj = availableBeverages.find(o => o.name === beverage.name);
    
    if (isRealValue(obj)) {
        incrementValueFor(document.getElementById(obj.labelId));
        selectedBeverages.push(beverage);
    } else {
        alert('Not found: ' + beverage.name + "; " + availableBeverages.length)
    }
    
    updateSum();
}

function incrementValueFor(label) {
    var currentCount = parseInt(label.innerHTML);
    label.innerHTML = currentCount+1;
}

function updateSum() {
    const sum = selectedBeverages
    .reduce(function(result,item) {
        return result + item.price;
    }, 0);
    
    document.getElementById('result').innerHTML = sum.toFixed(2) + '€'
}

function isRealValue(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}

function resetCounters() {
    for (var i = 0; i < availableBeverages.length; i++) {
        var item = availableBeverages[i];
        (document.getElementById(item.labelId)).innerHTML = 0
    }
}

function resetPressed() {
    selectedBeverages = [];
    resetCounters();
    updateSum();
}

function fillCups() {
    // Remove existing cups
    selectedBeverages = selectedBeverages.filter((value, index, array) => {
        return value.name != availableBeverages[5].name
    });
    
    var cupCount = 0;
    for (var i = 0; i < selectedBeverages.length; i++) {
        if (selectedBeverages[i].name != availableBeverages[5].name && selectedBeverages[i].name != availableBeverages[4].name) {
            cupCount += 1;
        }
    }
    
    (document.getElementById(availableBeverages[5].labelId)).innerHTML = cupCount;
    
    for (var i = 0; i < cupCount; i++) {
        selectedBeverages.push({name: 'Häferl', price: 2.50, labelId: 'cupCounterLabel'});
    }
    
    updateSum();
}

// Disable double tap on mobile
document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
        event.preventDefault();
    }
}, false);