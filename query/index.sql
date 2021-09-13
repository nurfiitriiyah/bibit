create table USER
(
    ID       int auto_increment
        primary key,
    UserName varchar(255) not null,
    Parent   int          not null
);

INSERT INTO bibit.USER (ID, UserName, Parent) VALUES (1, 'Ahmad', 2);
INSERT INTO bibit.USER (ID, UserName, Parent) VALUES (2, 'Muhammad', 0);
INSERT INTO bibit.USER (ID, UserName, Parent) VALUES (3, 'Zainap', 1);

select ID, UserName, (SELECT UserName from USER where ID = user.parent) as ParentUserName from USER as user
