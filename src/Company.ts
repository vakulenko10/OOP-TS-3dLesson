import { Department } from "./Department";

export class Company {
    private departments: Department[] = [];

    constructor(public name: string) {}

    addDepartment(department: Department): void {
        this.departments.push(department);
    }

    displayAllDepartments(): void {
        console.log(`Departments in ${this.name}:`);
        this.departments.forEach(department => console.log(department.name));
    }
}
