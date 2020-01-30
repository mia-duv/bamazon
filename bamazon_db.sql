CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50),
price DECIMAL(10,2) DEFAULT 0 NOT NULL,
stock_quantity INT,
PRIMARY KEY (item_id)
);

