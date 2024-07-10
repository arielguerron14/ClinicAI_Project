create database usuarios;
use usuarios;

create table login(
	username varchar(50) not null,
    password varchar (50) not null,
    primary key(username, password)
);

-- Insertamos datos de prueba en el login
INSERT INTO login(username, password) VALUES
	('user1','1234'),
    ('user2', '5678'),
    ('user3', '4321'),
    ('user4', '8765');