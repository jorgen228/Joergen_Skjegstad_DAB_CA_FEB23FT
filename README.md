# DAB - Course Assignment 1

# Application Installation and Usage Instructions

# Environment Variables

# Additional Libraries/Packages

# NodeJS Version Used

# DATABASE

# DATAINSERTS

insert into Animals(name, species, birthday, size, adopted)
values('Coco', 'Dwarf Hamster', '2020-02-12', 'small', false),
('Ted', 'Tedy Bear Hamster', '2021-02-12','small', false),
('Coco', 'Jack-Russel', '2020-02-12','medium', false),
('Everrest', 'Budgy', '2019-02-12','small', false),
('Rocko', 'Tortouse', '2020-02-12','medium', false),
('Goldy', 'Gold Fish', '2023-02-12', 'small', false),
('Lizzy', 'Lizzard', '2020-02-12', 'medium', false),
('Goga', 'Bearder Dragon', '2018-02-12', 'large', false),
('Tweet Tweet', 'Parrot', '2020-02-12', 'large', false),
('Toothless', 'Corn Snake', '2017-02-12', 'medium', false),
('Sophie', 'Dwarf Hamster', '2020-02-12', 'small', false),
('Teddy', 'Teddy Bear Hamster', '2021-02-12', 'small', false),
('ROger', 'Parrot', '2020-02-18', 'large', false);

insert into Users(fullname, username, password)
values ('System Admin', 'Admin', 'admin1234'), ('User', 'User', 'user1234'), ('User2', 'User', 'User1234');

update Users
set Role = 'admin' where username = 'Admin';

insert into Temperaments(name)
values ('Calm'), ('Scared'), ('Energetic'), ('Happy'), ('Lazy');

 insert into Species (name)
 values('Dwarf Hamster'), ('Tedy Bear Hamster'), ('Jack-Russel'), ('Budgy'), ('Tortouse'), ('Gold Fish'), ('Lizzard'), ('Bearder Dragon'), ('Parrot'), ('Corn Snake');

# DATABASEACCESS

# DATABASEQUERIES
