CREATE DATABASE books_database;

-- \c into database
CREATE TABLE book(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    pages INT NOT NULL,
    rating INT,
    status BOOLEAN NOT NULL
);

CREATE TABLE wishlist(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    link TEXT,
    price INT
);

