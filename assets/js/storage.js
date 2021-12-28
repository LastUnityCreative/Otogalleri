function Storage() {
    Storage.prototype.addCarToStorage = function(newCar) {
        // Call getCarsFromStorage function
        let cars = this.getCarsFromStorage();

        cars.push(newCar);

        localStorage.setItem("cars", JSON.stringify(cars));

    }
}

// create Local Storage function 
Storage.prototype.getCarsFromStorage = function() {
        let cars;

        if (localStorage.getItem("cars") === null) {
            cars = [];
        } else {
            cars = JSON.parse(localStorage.getItem("cars"));
        }
        return cars;
    }
    // Local storage element delete
Storage.prototype.deleteCarFromStorage = function(carTitle) {
    let cars = this.getCarsFromStorage();
    cars.forEach(function(car, index) {
        cars.splice(index, 1);
        localStorage.setItem("cars", JSON.stringify(cars));
    });
}

// All Cars remove Storage
Storage.prototype.clearAllCarsFromStorage = function() {
    localStorage.removeItem("cars");
}