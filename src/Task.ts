import { Employee } from "./Employee";

export class Task {
    constructor(public description: string, public assignedEmployee: Employee, public status: string = "Pending") {}

    updateStatus(status: string): void {
        this.status = status;
        console.log(`Task: ${this.description} - Updated to ${status}`);
    }
    
}