import { Car } from "./Car";
import { Customer } from "./Customer";

export class Rental {
    constructor(public car: Car, public customer: Customer, public days: number, public cost: number) {}
}

export class CarRentalSystem {
    private cars: Car[] = [];

    addCar(car: Car): void {
        this.cars.push(car);
    }

    displayAvailableCars(): void {
        console.log("Available cars:");
        this.cars.filter(car => car.isAvailable).forEach(car => console.log(`${car.brand} ${car.model}`));
    }

    rentCar(car: Car, customer: Customer, days: number): void {
        if (car.isAvailable) {
            const cost = days * 20; 
            const rental = new Rental(car, customer, days, cost);
            customer.addRental(rental);
            car.rentCar();
        } else {
            console.log(`${car.brand} ${car.model} is not available for rent.`);
        }
    }

    returnCar(car: Car): void {
        car.returnCar();
    }
}
