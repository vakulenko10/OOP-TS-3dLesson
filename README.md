## Description of the Code

### 1. **Company Management System**

The `Company`, `Department`, `Employee`, `Project`, and `Task` classes simulate a basic system for managing employees, departments, projects, and tasks in a company.

#### **Company Class**

The `Company` class represents a company that contains multiple departments. It has the following properties and methods:

- **Properties:**
  - `name`: The name of the company.
  - `departments`: A list of departments in the company.

- **Methods:**
  - `addDepartment(department: Department)`: Adds a department to the company's list of departments.
  - `displayDepartments()`: Displays a list of all departments in the company.
  
#### **Department Class**

The `Department` class represents a department within the company. It contains the following properties:

- **Properties:**
  - `name`: The name of the department.
  - `employees`: A list of employees working in the department.

- **Methods:**
  - `addEmployee(employee: Employee)`: Adds an employee to the department.
  - `displayEmployees()`: Displays all employees in the department.

#### **Employee Class**

The `Employee` class represents an employee working in the company. It contains the following properties:

- **Properties:**
  - `name`: The name of the employee.
  - `position`: The job title/position of the employee.
  - `salary`: The salary of the employee.
  - `projects`: A list of projects the employee is working on.

- **Methods:**
  - `assignToProject(project: Project)`: Assigns the employee to a project.
  
  
#### **Project Class**

The `Project` class represents a project in the company. It contains the following properties:

- **Properties:**
  - `name`: The name of the project.
  - `employees`: A list of employees assigned to the project.
  - `tasks`: A list of tasks for the project.

- **Methods:**
  - `addEmployee(employee: Employee)`: Adds an employee to the project.
  - `addTask(task: Task)`: Adds a task to the project.
#### **Task Class**

The `Task` class represents a task that an employee is assigned to. It contains the following properties:

- **Properties:**
  - `description`: A description of the task.
  - `assignedEmployee`: The employee responsible for completing the task.
  - `status`: The status of the task, such as "Pending", "In Progress", or "Completed".

- **Methods:**
  - `updateStatus(status: string)`: Updates the task's status.
