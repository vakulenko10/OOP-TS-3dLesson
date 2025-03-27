import { Project } from "./Project";
import { Task } from "./Task";

export class Employee {
    constructor(
        public name: string,
        public position: string,
        public salary: number,
        public projects: Project[] = []
    ) {}

    assignToProject(project: Project): void {
        this.projects.push(project);
        project.addEmployee(this);
    }
}
