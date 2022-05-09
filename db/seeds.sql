USE employees_db

INSERT INTO department (name) 
VALUES
('Sales'),
('Legal'),
('Security'),
('Human Resources')
('Finance'),
('Information Systems and Tech');

INSERT INTO roles (title, salary, department_id,) 
VALUES 
('Web Developer', 90000, 1)
('Engineer', 90000, 2)
('Accountant', 70000, 3)
('Manager', 70000, 4)
('Sales Rep', 40000, 5)
('Paralegal', 50000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
('John', 'Smith', 1, 123)
('Malia', 'Brown', 2, 769)
('Sarah', 'Lourd', 3, 565)
('Tom', 'Allen', 4, 089)
('Sam', 'Kash', 5, 561)
('John', 'Doe', 6, 234);

