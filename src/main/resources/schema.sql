-- Use for fresh data each launch of the application

-- Drop tables if they exist
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS employees;

-- Create 'products' table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

-- Sample product data
INSERT INTO products (name, quantity) VALUES
('Laptop', 10),
('Monitor', 15),
('Keyboard', 30),
('Mouse', 50),
('USB Drive', 100);

-- Create 'employees' table
CREATE TABLE employees (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    ssn VARCHAR(11) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(20) NOT NULL
);

-- Sample employee data
INSERT INTO employees (name, first_name, last_name, address, phone_number, ssn, email, role) VALUES
('Alice Manager', 'Alice', 'Manager', '123 Main St', '555-1234', '123-45-6789', 'alice@example.com', 'MANAGER'),
('Bob Staff', 'Bob', 'Staff', '456 Elm St', '555-5678', '987-65-4321', 'bob@example.com', 'STAFF');
