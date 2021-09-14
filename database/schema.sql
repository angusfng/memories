create table Users (
  id serial not null,
  username varchar(30) unique,
  email text,
  first_name text,
  last_name text,
  password text,
  primary key (id)
)