import { Employee } from "./Employee";

export class Department {
    private employees: Employee[] = [];

    constructor(public name: string) {}

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    displayEmployees(): void {
        console.log(`Employees in ${this.name} Department:`);
        this.employees.forEach(employee => console.log(`${employee.name} - ${employee.position}`));
    }
}
