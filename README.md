# Library and Bank Management System

## Overview

This project contains multiple classes and functionalities that simulate real-world systems such as a library, a bank account, a cinema, an order system, and a to-do list. The code demonstrates object-oriented programming concepts such as classes, methods, and object manipulation in TypeScript.

## How to Run the Project

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies** using npm:

    ```bash
    npm install
    ```

3. **Start the project**:

    ```bash
    npm start
    ```

    This will execute the TypeScript code and run it in the terminal/console. You should see the output from the various functionalities like book borrowing, account transactions, movie listings, etc.

## Description of the Code

### 1. **Car Rental System**

The `Car`, `Customer`, `Rental`, and `CarRentalSystem` classes simulate a basic car rental system.

#### **Car Class**

The `Car` class represents a car in the system. It has the following properties and methods:

- **Properties:**
  - `make`: The make (brand) of the car.
  - `model`: The model of the car.
  - `isAvailable`: A boolean indicating whether the car is available for rental.

- **Methods:**
  - `reserveCar()`: This method checks if the car is available (`isAvailable` is true). If available, it marks the car as unavailable (`isAvailable = false`) and prints a message confirming the car has been reserved. If not available, it displays a message saying the car cannot be reserved.

  - `returnCar()`: This method marks the car as available again (`isAvailable = true`) and prints a message confirming the car has been returned.

#### **Customer Class**

The `Customer` class represents a customer who rents cars. It has the following properties:

- **Properties:**
  - `name`: The name of the customer.
  - `rentals`: An array that stores a list of rentals made by the customer.

- **Methods:**
  - `addRental(rental: Rental)`: This method adds a rental to the customer's `rentals` list.

#### **Rental Class**

The `Rental` class represents a rental transaction. It contains the following properties:

- **Properties:**
  - `car`: The car being rented.
  - `customer`: The customer renting the car.
  - `days`: The number of days the car is being rented for.
  - `cost`: The total cost of the rental, calculated based on the number of days rented.

- **Methods:**
  - The constructor calculates the `cost` by multiplying the `days` rented with a fixed daily rental rate.

#### **CarRentalSystem Class**

The `CarRentalSystem` class manages the rental system. It has the following methods:

- **Properties:**
  - `cars`: An array to store the available cars in the rental system.

- **Methods:**
  - `addCar(car: Car)`: Adds a car to the rental system's inventory.
  - `displayAvailableCars()`: Displays a list of all available cars in the system.
  - `reserveCarForCustomer(customer: Customer, car: Car, days: number)`: Reserves a car for a customer by creating a `Rental` and adding it to the customer's list of rentals.

