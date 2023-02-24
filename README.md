# DAB - Course Assignment 1

# Application Installation and Usage Instructions

Install dependencies using npm install.

dependencies:
-"connect-sqlite3"
-"cookie-parser"
-"dotenv"
-"ejs"
-"express"
-"express-session"
-"http-errors"
-"morgan"
-"mysql"
-"mysql2"
-"nodemon"
-"passport"
-"passport-local"
-"sequelize"

To run application type npm start in the console.

This project uses nodemon for convenience.
To uninstall nodemon use npm uninstall nodemon in console.
Change "start" statement in package.json to node ./bin/www

# Environment Variables

# Additional Libraries/Packages

# NodeJS Version Used

v16.17.0

# DATABASE

create database adoptiondb;

# DATAINSERTS

insert into Users(fullname, username, password)
values ('System Admin', 'Admin', 'admin1234'), ('User', 'User', 'user1234'), ('User2', 'User', 'User1234');

update Users
set Role = 'admin' where username = 'Admin';

insert into Animals(name, SpeciesId, birthday, size, adopted)
values('Coco', 1, '2020-02-12', 'small', false),
('Ted', 2, '2021-02-12', 'small', false),
('Coco', 3, '2020-02-12', 'medium', false),
('Everrest', 4, '2019-02-12', 'small', false),
('Rocko', 5, '2020-02-12', 'medium', false),
('Goldy', 6, '2023-02-12', 'small', false),
('Lizzy', 7, '2020-02-12', 'medium', false),
('Goga', 8, '2018-02-12', 'large', false),
('Tweet Tweet', 9, '2020-02-12', 'large', false),
('Toothless', 10, '2017-02-12', 'medium', false),
('Sophie', 1, '2020-02-12', 'small', false),
('Teddy', 2, '2021-02-12', 'small', false),
('Roger', 9, '2020-02-18', 'large', false);

insert into Temperaments(name)
values ('Calm'), ('Scared'), ('Energetic'), ('Happy'), ('Lazy');

insert into Species(name)
values('Dwarf Hamster'), ('Tedy Bear Hamster'), ('Jack-Russel'), ('Budgy'), ('Tortouse'), ('Gold Fish'), ('Lizzard'), ('Bearder Dragon'), ('Parrot'), ('Corn Snake');

insert into AnimalTemps(AnimalId, TemperamentId)
values (1,1), (1,2), (2,1), (2,2), (3,3), (4,1), (4,4), (5,1), (5,5), (6,1), (7,1), (7,5), (8,1), (8,5), (8,2), (9,1), (9,4), (10,1), (11,1),
(11,2), (12,2), (13,1), (13,4);

# DATABASEACCESS

create role 'database owner'@'localhost';

CREATE USER 'dabcaowner'@'localhost' IDENTIFIED BY 'dabca1234';

GRANT ALL ON adoptionsdb.\* TO 'databse owner';

Grant 'database owner' to 'dabcaowner';

# DATABASEQUERIES

1: SELECT name FROM Animals GROUP BY name ORDER BY COUNT(\*) DESC LIMIT 1;

2: Select AnimalId, Animals.name, Users.username, Animals.adopted from Adoptions
join Animals on adopted = true
join Users on Adoptions.UserId = Users.id;

3: Select * from Animals order by birthday DESC;

4: Select * from Animals where birthday between 2017-12-31 and 2020-12-31;

5: SELECT size, count(size) FROM Animals GROUP by size;

6: Delimiter //
Create trigger Lizzard_update before insert on Animals
for each row
begin
declare vlatest_user int;
set vlatest_user = (Select max(id) from Users);
if new.SpeciesId = 7
then set new.adopted = true;
insert into Adoptions(createdAt, updatedAt, Userid, AnimalId) values (now(), now(), vlatest_user, new.id);
end if;
end //
Delimiter ;
