const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");


// UI object started
const ui = new UI();
// Storage object started
const storage = new Storage();
// All event dowloand

eventListeners();

// Submit funcktion
function eventListeners() {
    form.addEventListener("submit", addCar);

    document.addEventListener("DOMContentLoaded", function() {
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    });
    // Click function car delete
    cardBody.addEventListener("click", deleteCar);

    clear.addEventListener("click", clearAllCars);

}

// Create click submit addCar features
function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        // alertDiv write massage , type there
        ui.displayMassage("Tüm alanları doldurun...", "danger");
    } else {
        // New car
        const newCar = new Car(title, price, url);
        ui.addCarToUI(newCar); // add tools to interface

        storage.addCarToStorage(newCar);

        ui.displayMassage("Araç Başarı ile eklendi...", "success")
    }

    // Call ui clear inputs
    ui.clearInputs(titleElement, urlElement, priceElement);

    // Close Submit re log
    e.preventDefault();
}


// Create delete car for btn storage
function deleteCar(e) {
    if (e.target.id === "delete-car") {
        ui.deleteCarFromUI(e.target);
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMassage("Silme işlemi başarı ile gerçekleşti...", "success");
    }
}
// All clear cars function

function clearAllCars() {
    if (confirm("Tüm araçlar silinecek, Emin misiniz ? ")) {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
        ui.displayMassage("Tüm araçları başarı ile sildiniz...", "success");
    }
}