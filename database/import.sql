CREATE TABLE Cards (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
description TEXT NOT NULL,
status VARCHAR(50)
);

INSERT INTO Card (title, description, status)
VALUES ("RSP-547","Lorem ipsum dolor sit amet,nec rhoncus massa placerat" , "To do");

SELECT * FROM Card;