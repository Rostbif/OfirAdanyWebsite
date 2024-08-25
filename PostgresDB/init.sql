-- Create roles table
CREATE TABLE roles (
    Id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create users table
CREATE TABLE users (
    Id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    role INTEGER,
    CONSTRAINT fk_role FOREIGN KEY(role) REFERENCES roles(Id)
);

-- Insert initial roles
INSERT INTO roles (name) VALUES ('Admin'), ('User');