-- ===========================
-- CloudBank Database Schema
-- ===========================

CREATE TABLE IF NOT EXISTS users (

    id SERIAL PRIMARY KEY,

    username VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    email VARCHAR(150) UNIQUE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS accounts (

    id SERIAL PRIMARY KEY,

    account_number VARCHAR(20) UNIQUE NOT NULL,

    customer_name VARCHAR(100),

    account_type VARCHAR(30),

    balance NUMERIC(15,2),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS transactions (

    id SERIAL PRIMARY KEY,

    account_number VARCHAR(20),

    transaction_type VARCHAR(20),

    amount NUMERIC(15,2),

    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS loans (

    id SERIAL PRIMARY KEY,

    customer_name VARCHAR(100),

    loan_type VARCHAR(50),

    amount NUMERIC(15,2),

    status VARCHAR(30),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS notifications (

    id SERIAL PRIMARY KEY,

    customer_name VARCHAR(100),

    message TEXT,

    status VARCHAR(20),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
