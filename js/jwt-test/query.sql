create table user (
    id int(11) NOT NULL auto_increment,
    email varchar(50) NOT NULL,
    pwd varchar(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id, email)
);

insert into user (email, pwd) values ('minchul47@naver.com', '1234');
insert into user (email, pwd) values ('wolo@gmail.com', '12qwaszx');