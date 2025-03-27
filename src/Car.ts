export class Car {
    constructor(public brand: string, public model: string, public isAvailable: boolean = true) {}

    rentCar(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.brand} ${this.model} has been rented.`);
        } else {
            console.log(`${this.brand} ${this.model} is not available.`);
        }
    }

    returnCar(): void {
        this.isAvailable = true;
        console.log(`${this.brand} ${this.model} has been returned.`);
    }
}
