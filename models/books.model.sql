CREATE DATABASE books_database;

-- \c into database
CREATE TABLE book(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    pages INT NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE wishlist(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    link TEXT,
    price FLOAT
);

INSERT INTO book (title, author, pages) VALUES('Harry Potter 1', 'JK Rowling', 532);
INSERT INTO book (title, author, pages) VALUES('Harry Potter 2', 'JK Rowling', 632);
INSERT INTO book (title, author, pages) VALUES('Harry Potter 3', 'JK Rowling', 762);
INSERT INTO book (title, author, pages, status) VALUES('Harry Potter 3', 'JK Rowling', 762, TRUE);

INSERT INTO book (title, author, pages) VALUES('Harry Potter 5', 'JK Rowling', 762);
INSERT INTO book (title, author, pages) VALUES('Harry Potter 6', 'JK Rowling', 762);
INSERT INTO book (title, author, pages) VALUES('Harry Potter 7', 'JK Rowling', 762);
INSERT INTO book (title, author, pages) VALUES('Harry Potter 8', 'JK Rowling', 762);


