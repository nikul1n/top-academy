class Garage {
    constructor(capacity) {
        // this.capacity = capacity;
        this.parkedCar = [capacity];
    }

    parkCar(car) {
        if (this.parkedCar.length < this.capacity){

        }
    }
    // hireEmployee = employee => this.staff.push(employee);
    addCar = car => {
        if (this.parkedCar.length < this.capacity)
        {
            this.parkedCar.push(car);
            console.log("Припаркована");
            return {slot: this.parkCar.length - 1, error: null};
        }
        else {
            console.log("Не припаркована");
            return {slot: null, error: "Гараж полон"};
        }

    }
}

// Илнур
// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     getFullName() {
//         return `${this.brand}, ${this.model}`;
//     }
// }
// class Garage {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.parkedCars = [];
//     }

//     tryParkCar(car) {
//         if (this.parkedCars.length < this.capacity) {
//             this.parkedCars.push(car);
//             console.log(`Машина ${car.getFullName()} припаркована`);
//             return { slot: this.parkedCars.length - 1, error: null };
//         }
//         else {
//             console.log(`Машина ${car.getFullName()} не поместилась. Гараж полон`);
//             return { slot: null, error: "Гараж полон" };
//         }
//     }

// }
// const myGarage = new Garage(2);

// const car1 = new Car("Hyndai", "VF");
// const car2 = new Car("Lada", 2114);
// const car3 = new Car("Nissan", "X-Trail");

// myGarage.tryParkCar(car1);

// myGarage.tryParkCar(car2);

// if (myGarage.tryParkCar(car3)) {
//     console.log("Действия при успешной парковке");
// } else {
//     console.log("Оповещение о неуспешной парковке")
// }

// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     getFullName() {
//         return `${this.brand}, ${this.model}`;
//     }
// }
// class Garage {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.parkedCars = [];
//     }

//     tryParkCar(car) {
//         if (this.parkedCars.length >= this.capacity) {
//             throw new Error(`Машина ${car.getFullName()} не поместилась. Гараж полон`);
//         }
//         this.parkedCars.push(car);
//         console.log(`Машина ${car.getFullName()} припаркована`);
//         return this.parkedCars.length - 1;
//     }

// }
// const myGarage = new Garage(2);

// const car1 = new Car("Hyndai", "VF");
// const car2 = new Car("Lada", 2114);
// const car3 = new Car("Nissan", "X-Trail");

// try {
//     myGarage.tryParkCar(car1);
//     myGarage.tryParkCar(car2);
//     myGarage.tryParkCar(car3);
// } catch (error) {
//     console.log(error.message);
// } 