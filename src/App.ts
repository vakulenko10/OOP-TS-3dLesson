import { Company } from "./Company";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { Project } from "./Project";
import { Task } from "./Task";

const company = new Company("Tech Corp");

const itDepartment = new Department("IT");
const hrDepartment = new Department("HR");
const marketingDepartment = new Department("Marketing");

company.addDepartment(itDepartment);
company.addDepartment(hrDepartment);
company.addDepartment(marketingDepartment);

const employee1 = new Employee("Alice", "Software Engineer", 80000);
const employee2 = new Employee("Bob", "HR Manager", 60000);
const employee3 = new Employee("Charlie", "Marketing Specialist", 50000);

itDepartment.addEmployee(employee1);
hrDepartment.addEmployee(employee2);
marketingDepartment.addEmployee(employee3);

const project1 = new Project("New Website");
const project2 = new Project("Ad Campaign");

employee1.assignToProject(project1);
employee2.assignToProject(project2);
employee3.assignToProject(project2);

const task1 = new Task("Design the Homepage", employee1);
const task2 = new Task("Write Ad Copy", employee3);

project1.addTask(task1);
project2.addTask(task2);

project1.displayTasks();
project2.displayTasks();

company.displayAllDepartments();
itDepartment.displayEmployees();
hrDepartment.displayEmployees();
marketingDepartment.displayEmployees();