import { Rental } from "./Rental";

export class Customer {
    private rentals: Rental[] = [];

    constructor(public name: string) {}

    addRental(rental: Rental): void {
        this.rentals.push(rental);
    }

    getRentalHistory(): void {
        console.log(`Rental History for ${this.name}:`);
        this.rentals.forEach(rental => {
            console.log(`${rental.car.brand} ${rental.car.model} for ${rental.days} days, Cost: $${rental.cost}`);
        });
    }
}