import { Employee } from "./Employee";
import { Task } from "./Task";

export class Project {
    private tasks: Task[] = [];
    private employees: Employee[] = [];

    constructor(public name: string) {}

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    displayTasks(): void {
        console.log(`Tasks for project: ${this.name}`);
        this.tasks.forEach(task => console.log(`${task.description} - Status: ${task.status}`));
    }
}
