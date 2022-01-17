CREATE DATABASE pernstack;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false
);

