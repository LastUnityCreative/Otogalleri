function UI() {

}

// Add innerHTML cars area
UI.prototype.addCarToUI = function(newCar) {
    const carList = document.getElementById("cars")
    carList.innerHTML +=
        `
         <tr>
             <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
             <td>${newCar.title}</td>
             <td>${newCar.price}</td>
             <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
         </tr>
    `
};


//  Clear input element
UI.prototype.clearInputs = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}


// Create Alert Div

// Select AlertDiv parent
UI.prototype.displayMassage = function(massage, type) {
    const cardBody = document.querySelector(".card-body");

    // alertDiv creat and add parent div
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = massage;
    cardBody.appendChild(alertDiv);

    // Remove alertDiv
    setTimeout(function() {
        alertDiv.remove();
    }, 2500);
}

// Create pull tools from local function 
UI.prototype.loadAllCars = function(cars) {
        const carList = document.getElementById("cars");

        cars.forEach(function(car) {
            carList.innerHTML +=
                `
         <tr>
             <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
             <td>${car.title}</td>
             <td>${car.price}</td>
             <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
         </tr>
            `
        });
    }
    // delete car function
UI.prototype.deleteCarFromUI = function(element) {
        element.parentElement.parentElement.remove();
    }
    // Clear All cars Ui
UI.prototype.clearAllCarsFromUI = function() {
    const carList = document.getElementById("cars");
    while (carList.firstElementChild !== null) {
        carList.firstElementChild.remove();
    }
}