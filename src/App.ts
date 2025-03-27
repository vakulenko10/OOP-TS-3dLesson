import { Car } from "./Car";
import { Customer } from "./Customer";
import { CarRentalSystem } from "./Rental";

const carRentalSystem = new CarRentalSystem();
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Ford", "Focus");
carRentalSystem.addCar(car1);
carRentalSystem.addCar(car2);

const customer1 = new Customer("John Doe");
carRentalSystem.displayAvailableCars();
carRentalSystem.rentCar(car1, customer1, 3);
carRentalSystem.displayAvailableCars();
customer1.getRentalHistory();
carRentalSystem.returnCar(car1);
carRentalSystem.displayAvailableCars();