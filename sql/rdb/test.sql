select count(distinct(age)) age, count(distinct(sex)) sex from users;

create index IDX_AGE on users (age);
select SQL_NO_CACHE * from users where age = 50 and sex = 1;


show table status from [db];


select * from articles a inner join users u on a.userId = u.id where u.id < 500;
create index IDX_TITLE on articles (title);
select * from users u inner join articles a on a.userId = u.id where a.title like 'a1%';
select * from users u inner join articles a on a.userId = u.id where a.title like '%12';

select count(*) from articles a inner join users u on a.userId = u.id;
select count(*) from articles a left join users u on a.userId = u.id;
select count(*) from articles a right join users u on a.userId = u.id;
